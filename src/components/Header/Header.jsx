
import React, { Component } from 'react'
import './header.css';
import logo from './../../img/logo.svg';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';



export class Header extends Component {
    componentDidMount(){

        $('.btn').click(function(event){
            $('.__nav').removeClass('active-menu')
            var num = $(this).attr('data-num');
		    $('#blockBtn'+num).addClass('active-menu')
        })

        $(window).on("scroll", function() {
            if ($(window).scrollTop() > 10) $('.header').addClass('header--scrolling');
                  else $('.header').removeClass('header--scrolling');
            });
    }
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
                            <ul>
                                <li id='blockBtn1' className="__nav"><a className='btn' data-num="1" href="#exp">Experience</a></li>
                                <li id='blockBtn2' className="__nav"><a className='btn' data-num="2" href="#work">Work</a></li>
                                <li id='blockBtn3' className="__nav"><a className='btn' data-num="3" href="#photo">Photography</a></li>
                                <li id='blockBtn4' className="__nav"><a className='btn' data-num="4" href="#cont">Contact</a></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        </header>
    )
  }
}

export default Header
