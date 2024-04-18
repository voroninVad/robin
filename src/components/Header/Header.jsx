
import React, { Component } from 'react'
import './header.css';
import logo from './../../img/logo.svg';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';



export class Header extends Component {
  render() {
    return (
      <header>
            <div className="header">
                <div className="header">
                    <div ref="toggle" className="header__content">
                        <div className="header__logo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="header__nav">
                            <nav>
                                <ul>
                                    <li id='blockBtn1' className="__nav"><a className='btn-nav' data-num="1" href="#exp">Experience</a></li>
                                    <li id='blockBtn2' className="__nav"><a className='btn-nav' data-num="2" href="#work">Work</a></li>
                                    <li id='blockBtn3' className="__nav"><a className='btn-nav' data-num="3" href="#photo">Photography</a></li>
                                    <li id='blockBtn4' className="__nav"><a className='btn-nav' data-num="4" href="#cont">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                        
                    </div>
                </div>
            </div>
        </header>
    )
  }
}

export default Header
