import './gallary.css'
import $ from 'jquery';
import italy from './italy.json'
import australia from './australia.json'
import india from './india.json'
import brazil from './brazil.json'


import React, { Component } from 'react'

export class Gallary extends Component {
  render() {
    return (
      <div id='photo' className="gallary">
        <div className="gallary__content">
            <div className="gallary__title">
                <span>Photography</span>
                <div className="gallary__desc">
                Here is a collection of my best travel pictures that I took while travelling places all around the world. 
                </div>
            </div>
            <div className="course">
                <button className='btn btn-active' type='button' id='italy' data-button='italy'>ITALY</button>
                <button className='btn' type='button' id='australia' data-button='australia'>AUSTRALIA</button>
                <button className='btn' type='button' id='india' data-button='india'>INDIA</button>
                <button className='btn' type='button' id='brazil' data-button='brazil'>BRAZIL</button>
            </div>
            <div  className="gallary__images ">
                <div id='visible-italy' className="images visibility action">
                {
                    italy.map(el => {
                        return(
                            <div className='image'>
                                <img src={require(`./../../img/gallary/italy/${el.img}`)} alt="" />
                            </div>
                        )
                    })
                } 
                </div>
                <div id='visible-australia' className="images visibility">
                {
                    australia.map(el => {
                        return(
                            <div className='image'>
                                <img src={require(`./../../img/gallary/australia/${el.img}`)} alt="" />
                            </div>
                        )
                    })
                } 
                </div>
                <div id='visible-india' className="images visibility">
                {
                    india.map(el => {
                        return(
                            <div className='image'>
                                <img src={require(`./../../img/gallary/india/${el.img}`)} alt="" />
                            </div>
                        )
                    })
                } 
                </div>
                <div id='visible-brazil' className="images visibility">
                {
                    brazil.map(el => {
                        return(
                            <div className='image'>
                                <img src={require(`./../../img/gallary/brazil/${el.img}`)} alt="" />
                            </div>
                        )
                    })
                } 
                </div>
            
            </div>
        </div>
      </div>
    )
  }
}

export default Gallary

