import React, { Component } from 'react'
import {connect} from 'react-redux'
 class detail extends Component {
    render() {
        console.log(this.props.detail.data,'qqqqqqqqqqqq')
        return (
            <div>
                详情页面
                {this.props.detail.data}
            </div>
        )
    }
}

let mapstateToProps = (state) =>{
    return {
        detail : state.cunname
    }
}
export default connect(mapstateToProps)(detail)

