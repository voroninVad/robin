import './instagram.css'
import img from './../../img/01_007.avif'

import React, { Component } from 'react'

export class Philosophy extends Component {
  render() {
    return (
      <div className="instagram">
          <div className="instagram__content">
            <div className="instagram__text">
              <div className="instagram__title">
              Instagram
              <div className="instagram__desc">
              If you area a person who enjoys photography, then I highly recommend that you check out my Instagram. I’m an avid traveller and I capture the best moments that I would love to cherish with the world
              </div>
              </div>
              
              <div className="instagram__link">
                <a href="#!">Follow me on IG</a>
              </div>
            </div>
            <div className="instagram__img">
              <img src={img} alt="" />
            </div>
          </div>
      </div>
    )
  }
}

export default Philosophy