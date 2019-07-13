import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../style/home.css'
export default class home extends Component {
    render() {
        return (
            <div>
                <div className="wrap">
                    <NavLink to='addclass'>添加班级</NavLink>
                    <NavLink to='ClassManagement'>管理班级</NavLink>
                    <NavLink to='addStudent'>添加学生</NavLink>
                </div>
            </div>
        )
    }
}
