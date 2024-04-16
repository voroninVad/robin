import React from 'react';
import Header from './components/Header/Header';
import './index.css';
import Banner from './components/banner/Banner';
import Exp_work from './components/experience/Exp_work';
import Philosophy from './components/Philosophy&values/Philosophy';
import Skillset from './components/skillset/Skillset';
import Swiper from './components/swiper/Swiper';
import Work from './components/work/Work';
import Instagram from './components/instagram/Instagram';
import Dribbble from './components/drigggle/Dribbble';
import Reviews from './components/reviews/Reviews';
import Gallary from './components/gallary/Gallary';
import $ from 'jquery';


class App extends React.Component {
  componentDidMount(){
  $(window).on("scroll", function() {
            if ($(window).scrollTop() > 10) $('.header').addClass('header--scrolling');
            else $('.header').removeClass('header--scrolling');

            if($(window).scrollTop() > 0 && $(window).scrollTop() < 2900) {
              $('#blockBtn1').addClass('active-menu');
            }
            else if($(window).scrollTop() > 2900 && $(window).scrollTop() < 9550){
              $('#blockBtn2').addClass('active-menu');
            }
            else if($(window).scrollTop() > 9600 && $(window).scrollTop() < 10750){
              $('#blockBtn3').addClass('active-menu');
            }
            else{
              $('.__nav').removeClass('active-menu')
            }
      });

      
    $('.btn').click(function(event){
      $('.btn').removeClass('btn-active')
      $('.images').removeClass('action')
      var name = $(this).attr('data-button');
      $('#'+name).addClass('btn-active')
      $('#visible-'+name).addClass('action')
    })
  }
  render(){
    return (
      <div className="App">
        <Header />
        <div className='main'>
            <Banner />
            <Exp_work />
            <Philosophy />
            <Skillset />
            <Swiper />
            <Work />
            <Instagram />
            <Dribbble />
            <Reviews />
            <Gallary />
        </div>
      </div>
    );
  }
}

export default App;
