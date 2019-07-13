import React, { Component } from 'react'

import swiper from '../../../node_modules/swiper/dist/js/swiper.js'
import '../../../node_modules/swiper/dist//css/swiper.css'
export default class extends Component {
    componentDidMount(){
        new swiper('.main',{autoplay:true})
    }
    render() {
        return (
            <div>
                 <div className="swiper-container main">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">1</div>
                        <div className="swiper-slide">2</div>
                        <div className="swiper-slide">3</div>

                    </div>
                </div>
            </div>
        )
    }
}
