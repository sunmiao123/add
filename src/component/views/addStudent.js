import React, { Component } from 'react'
import {connect} from 'react-redux'

import Swipers from '../components/swiper'
class addStudent extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:''
        }
    }
    componentDidMount(){
        if(!localStorage.getItem('name')&& !localStorage.getItem('pwd')){
            this.props.history.push('/login')
            console.log(11)
        }else{
            console.log(22)
        }
    }
    
    render() {
        console.log(this.props.name)
        return (
            <div>
               <Swipers/>
                添加学生
                <input value={this.state.name} onChange={(e)=>{
                    this.setState ({
                        name:e.target.value
                    })
                }}/>
                <button onClick={()=>{
                    this.props.save(this.state.name)
                    this.setState({
                        name:''
                    })
                }}>添加学生</button>
               
                {this.props.name.data.map((item,index)=>{
                    console.log(9999999)
                    return <li key={index} onClick={()=>{
                        console.log(item)
                        this.props.cunname(item)
                        //跳详情
                        this.props.history.push('/detail/'+index)
                        
                    }}>{item}</li>
                })}
            </div>
        )
    }
}

let mapstateToProps = (state) =>{
   
    return {
        name:state.addname
    }
}

let mapdispatchToProps =(dispatch) =>{
    return {
        save:(name)=>{
            dispatch({type:'NAME',data:name})
        },
        cunname:(item)=>{
            console.log(item)
            dispatch({type:'CUNNAME',data:item})
        }
    }
}
export default connect(mapstateToProps,mapdispatchToProps)(addStudent)
