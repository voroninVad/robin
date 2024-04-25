
import React, { Component } from 'react'
import './header.css';
import logo from './../../img/logo.svg';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';



export class Header extends Component {
  componentDidMount(){
    $('.btn-nav').click(function(){
      $('.__nav').removeClass('active-menu');
      var id = $(this).attr('data-num');
      $('#blockBtn'+id).addClass('active-menu');
    })   
  }
    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};
  
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }
     
  render() {
    return (
      <header>
            <div className="header">
                <div ref="toggle" className="header__content">
                    <div className="header__logo">
                        <img src={logo} alt="" />
                    </div>
                        <nav className={this.state.isToggleOn ? 'menu menu-visible' : 'menu'}>
                            <ul>
                                <li id='blockBtn1' className="__nav"><a className='btn-nav' onClick={this.handleClick}  data-num="1" href="#exp">Experience</a></li>
                                <li id='blockBtn2' className="__nav"><a className='btn-nav' onClick={this.handleClick}  data-num="2" href="#work">Work</a></li>
                                <li id='blockBtn3' className="__nav"><a className='btn-nav' onClick={this.handleClick}  data-num="3" href="#photo">Photography</a></li>
                                <li id='blockBtn4' className="__nav"><a className='btn-nav' onClick={this.handleClick}  data-num="4" href="#cont">Contact</a></li>
                            </ul>
                        </nav>
                    
                        <button type='button' id='btn-menu' className={this.state.isToggleOn ? 'btn-menu menu-open' : 'btn-menu menu-close'} onClick={this.handleClick} aria-expanded={this.state.isToggleOn} aria-label="open menu">
                            <span></span>
                        </button>
                </div>
            </div>
        </header>
    )
  }
}

export default Header