import React, { Component } from 'react'
import axios from 'axios'
export default class ClassManagement extends Component {
    componentDidMount(){
        axios.get('/list').then((res)=>{
            console.log(res)
        })
    }
    render() {
        return (
            <div>
                班级管理
            </div>
        )
    }
}
