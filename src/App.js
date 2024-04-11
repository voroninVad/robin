import React from 'react';
import Header from './components/Header/Header';
import './index.css';
import Banner from './components/banner/Banner';


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header />
        <div className='main'>
            <Banner />
        </div>
      </div>
    );
  }
}

export default App;
