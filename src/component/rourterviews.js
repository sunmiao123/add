import React, { Component } from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
export default class rourterviews extends Component {
    render() {
        let { routers } = this.props

        let redirects = routers.filter((item, index) => {
            return item.redirect
        })
        let itemredirect = redirects.map((item, index) => {
            return <Redirect from={item.path} to={item.redirect}></Redirect>
        })
        routers = routers.filter(item => !item.redirect)
        return (
            <div>
                <Switch>
                    {routers.map((item, index) => {
                        return <Route path={item.path} render={(props) => {
                            return <>
                                {item.children && <item.component children={this.children} {...props}/>}
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
