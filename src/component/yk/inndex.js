import React, { Component } from 'react'
import mock from './mock/mock'
import antd from 'antd'
import BScroll from "better-scroll"

export default class Inndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            num: 10,
            newarr: [],
            div: null
        }
    }

    render() {
        return (
            <div className="wrap" ref="wrap">
                <div className="big" ref="big">
                    {this.state.newarr.map((item, index) => {
                        return <div key={index}>{item.title}</div>
                    })}
                </div>
            </div>
        )
    }

    componentDidMount() {
        let { page, num } = this.state
        let start = (page - 1) * num
        let end = page * num

        this.setState({
            newarr: mock.list.slice(start, end)
        }, () => {
            // this.myBScroll.refresh()
            this.scrllFn()
        })
    }
    scrllFn() {
        this.myBScroll = new BScroll(this.refs.wrap, {
            probeType: 3
        })
        let bigH = this.refs.big.offsetHeight;
        let { page, num, newarr } = this.state
        let start = (page - 1) * num
        let end = page * num
        this.myBScroll.on("scrollEnd", ({ y }) => {
            let scrollH = Math.floor(Math.abs(y)) + (this.refs.wrap.offsetHeight)
            if (scrollH > bigH) {
                console.log("底部")
                this.setState({
                    newarr: newarr.concat(mock.list.slice(start, end))
                }, () => {
                    this.myBScroll.refresh()
                })
            }
        })
    }
    componentDidUpdate() {

    }
}
