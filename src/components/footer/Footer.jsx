import './footer.css'

import logo from './../../img/logo.svg'
import tw from './../../img/social/01_003.svg'
import dr from './../../img/social/02_002.svg'
import inst from './../../img/social/03.svg'

import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__content">
            <div className="footer__social_link">
                <div className="footer__social">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <img src={tw} alt="" />
                    <img src={dr} alt="" />
                    <img src={inst} alt="" />
                </div>
                <div className="footer__link">
                    <ul>
                        <li><a href="#!">Home</a></li>
                        <li><a href="#!">About</a></li>
                        <li><a href="#!">Work</a></li>
                        <li><a href="#!">Process</a></li>
                    </ul>
                    <ul>
                        <li><a href="#!">Store</a></li>
                        <li><a href="#!">Blog</a></li>
                        <li><a href="#!">Reading List</a></li>
                    </ul>
                </div>  
            </div>
            <div className="copyright">
            Not Copyright 2020 • Robin Williams. Webflow cloneable
            </div>
        </div>
      </div>
    )
  }
}

export default Footer