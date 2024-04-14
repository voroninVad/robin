import './dribbble.css'
import img from './../../img/01_002.avif'

import React, { Component } from 'react'

export class Dribbble extends Component {
  render() {
    return (
      <div className="dribbble">
        <div className="dribbble__content">
            <div className="dribbble__text">
                <div className="dribbble__title">
                Dribbble
                </div>
                <div className="dribbble__desc">
                Each dribbble shot is made with love and care. Do check out my work on Dribbble. Likes and comments are appreciated.
                </div>
                <div className="dribbble__link">
                    <a href="#!">Follow me on Dribbble</a>
                </div>
            </div>
            <div className="dribbble__img">
                <img src={img} alt="" />
            </div>
        </div>
      </div>
    )
  }
}

export default Dribbble