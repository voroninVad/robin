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
import Footer from './components/footer/Footer';
import $ from 'jquery';
import Contact from './components/contact/Contact';


class App extends React.Component {
  componentDidMount(){
    $(window).on("scroll", function() {
      if ($(window).scrollTop() > 5) $('.header').addClass('header--scrolling');
      else $('.header').removeClass('header--scrolling');
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
        <Header/>
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
          <Contact /> 
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
