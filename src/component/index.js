import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routerview from './routerview'
import { routers } from './router'
// console.log(routers)
// import './style/index.css'
export default class index extends Component {
    render() {
        console.log(this.props)
        return (
            <BrowserRouter>
                <div>
                    <Routerview routers={routers}></Routerview>
                </div>
            </BrowserRouter>

        )
    }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //          contentClass:"conditionArea"
    //     };
    //     this.windowOnScroll();
    //     // let isScrollTop = true;
        
    // };
    // windowOnScroll(){
    //     let _this = this;
    //     window.onscroll = function(){
    //          //获取滚动条滚动的距离
    //         let h = document.documentElement.scrollTop;
    //         console.log(h);
    //         if(h > 74){
    //             console.log('111');
    //             _this.setState({
    //                 contentClass:"conditionArea conditionArea_fixed"
    //             });
    //         }else{
    //             _this.setState({
    //                 contentClass:"conditionArea"
    //             });
    //         }
    //     }
    // };
    // render() {
    //     return (
    //       <div className="container">
    //           <div className="set_head_fixed">
    //               <span className="set_text">我是头部</span>
    //           </div>
    //           <div className={this.state.contentClass}>
    //                 <div>
    //                     <span>置顶块</span>
    //                 </div>          
    //           </div>
    //           <div className="set_displayContent">
    //                <p>内容区域</p>
    //           </div>
    //       </div>
    //     );
    // }

}




