import React, { Component } from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
export default class routerview extends Component {
    render() {
        let { routers } = this.props
        console.log(routers)
        let redirects = routers.filter((item, index) => {
            return item.redirect
        })

        let itemredirect = redirects.map((item, index) => {
            return <Redirect key={index} from={item.path} to={item.redirect}></Redirect>
        })

        routers = routers.filter(item => !item.redirect)

        return (
            <div>
                <Switch>
                    {routers.map((item, index) => {
                        return <Route key={index} path={item.path} render={(props) => {
                            return <>
                                {item.children && <item.component children={item.children} {...props} />}
                                {!item.children && <item.component {...props} />}
                            </>
                        }}></Route>
                    })}
                    {itemredirect.length !== 0 && itemredirect}
                </Switch>
            </div>
        )
    }
}
