import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../style/addclass.css'
class addclass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classname: '',
            class:'xiding'
        }
        this.scrollFn()
    }
    scrollFn(){
        window.onscroll = () =>{
            let h = document.documentElement.scrollTop
            console.log(h)
            if(h>80){
                this.setState({
                    class: 'xiding active'
                })
            }else{
                this.setState({
                    class:'xiding'
                })
            }
        }
    }
    render() {
        return (
            <div className="wraps">
                <div className="top">
                    顶部
                </div>
                <div className={this.state.class}>
                    吸顶
                </div>
                <div className="class"> 添加班级
                    <input value={this.state.classname} onChange={(e) => {
                        this.setState({
                            classname: e.target.value
                        })

                    }} />
                    <button onClick={() => {
                        this.props.save(this.state.classname)
                    }}>添加班级</button>
                </div>
            </div>
        )
    }
}
let mapstateToProps = (state) => {
    return {

    }
}

let mapdispatchToProps = (dispatch) => {
    return {
        save: (name) => {
            dispatch({ type: 'CHUANG', data: name })
        }
    }
}

export default connect(mapstateToProps, mapdispatchToProps)(addclass)
