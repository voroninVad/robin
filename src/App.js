import React from 'react';
import Header from './components/Header/Header';
import './index.css';
import Banner from './components/banner/Banner';
import Exp_work from './components/experience/Exp_work';
import Philosophy from './components/Philosophy&values/Philosophy';
import Skillset from './components/skillset/Skillset';
import Swiper from './components/swiper/Swiper';
import Work from './components/work/Work';


class App extends React.Component {
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
        </div>
      </div>
    );
  }
}

export default App;
