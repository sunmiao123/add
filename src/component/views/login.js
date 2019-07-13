import React, { Component } from 'react'

export default class login extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'',
            pwd:''
        }
    }
    
    render() {
        return (
            <div>
                登陆
                <input value={this.state.name} onChange={(e)=>{
                    this.setState({
                        name:e.target.value
                    })
                }}/>
                <input value={this.state.pwd} onChange={(e)=>{
                    this.setState({
                        pwd:e.target.value
                    })
                }}/>
                <button onClick={()=>{
                    localStorage.setItem('name',this.state.name)
                    localStorage.setItem('pwd',this.state.pwd)
                    this.props.history.go(-1)
                }}>登陆</button>
            </div>
        )
    }
}
