import './swiper.css'
import cbre from './../../img/01.svg';
import epiq from './../../img/02.svg';
import f from './../../img/03_003.svg';
import list from './../../img/04.svg';
import place from './../../img/05.svg';
import m from './../../img/06.svg';

import React, { Component } from 'react'

export class Swiper extends Component {


  render() {
    return (
      <div className="swipers__slide">
        <div className="swiper__img">
            <div className="swipers">
                <div className="swiper"><img src={cbre} alt="" /></div>
                <div className="swiper"><img src={epiq} alt="" /></div>
                <div className="swiper"><img src={f} alt="" /></div>
                <div className="swiper"><img src={list} alt="" /></div>
                <div className="swiper"><img src={place} alt="" /></div>
                <div className="swiper"><img src={m} alt="" /></div>
            </div>
        </div>
        <div className="swiper__img">
        <div className="swipers">
                <div className="swiper"><img src={cbre} alt="" /></div>
                <div className="swiper"><img src={epiq} alt="" /></div>
                <div className="swiper"><img src={f} alt="" /></div>
                <div className="swiper"><img src={list} alt="" /></div>
                <div className="swiper"><img src={place} alt="" /></div>
                <div className="swiper"><img src={m} alt="" /></div>
            </div>
        </div>
      </div>
    )
  }
}

export default Swiper