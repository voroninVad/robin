import './philosophy.css'
import img from './../../img/01.avif'

import React, { Component } from 'react'

export class Philosophy extends Component {
  render() {
    return (
      <div className="philosophy">
          <div className="philosophy_content">
            <div className="philosophy__text">
              <div className="philosophy__title">
              Philosophy & values
              <div className="philosophy__desc">
              I think everyone wants the same thing - relationship with humanity, peace with the metaphysical, and experience with the universe. I try to grasp these things with my values: authenticity, creativity, & hospitality.
              </div>
              </div>
              
              <div className="philosophy__link">
                <a href="#!">More about me</a>
              </div>
            </div>
            <div className="philosophy__img">
              <img src={img} alt="" />
            </div>
          </div>
      </div>
    )
  }
}

export default Philosophy