import React, { Component } from 'react'
import './banner.css'
import photo from './../../img/01_003.avif'

export class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <div className="banner__photo">
            <img src={photo} alt="" />
        </div>
        <div className="banner__content">
            <div className="banner__title">
            I’m Robin Williams. A Product Designer <span>based in Italy</span>.
            </div>
            <div className="banner__desc">
            I’m probably the most passionate designer you will ever get to work with. If you have a great project that needs some amazing skills, I’m your guy.
            </div>
        </div>
      </div>
    )
  }
}

export default Banner