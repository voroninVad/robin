import React from 'react';
import Header from './components/Header/Header';
import './index.css';
import Banner from './components/banner/Banner';
import Exp_work from './components/experience/Exp_work';


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header />
        <div className='main'>
            <Banner />
            <Exp_work />
        </div>
      </div>
    );
  }
}

export default App;
