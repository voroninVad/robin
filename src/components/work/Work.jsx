import Card from '../cardsWork/Card'
import './work.css'

import img_Card1 from './../../img/01_004.avif'
import img_Card2 from './../../img/03_006.avif'
import img_Card3 from './../../img/02_005.avif'
import img_Card4 from './../../img/04.avif'

import React, { Component } from 'react'

export class Work extends Component {
    constructor(props){
        super(props);

        this.state = {
            cards:[
                {
                    image: img_Card1,
                    title: 'Restaurant Website Design',
                    desc: 'I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.'
                },
                {
                    image: img_Card2,
                    title: 'Restaurant Website Design',
                    desc: 'I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.'
                },
                {
                    image: img_Card3,
                    title: 'Restaurant Website Design',
                    desc: 'I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.'
                },
                {
                    image: img_Card4,
                    title: 'Restaurant Website Design',
                    desc: 'I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.'
                },
            ]
        }
    }
  render() {
    return (
      <div className="work" id='work'>
        <div className="work__container">
            <div className="work__items">
                <div className="work__item">
                    <div className="work__title">
                        <span>MY PROJECTS</span>
                        Work that I’ve done for the past 8 years
                    </div>
                    <Card img={this.state.cards[0].image} titleItem={this.state.cards[0].title} description={this.state.cards[0].desc}/>
                    <Card img={this.state.cards[1].image} titleItem={this.state.cards[1].title} description={this.state.cards[1].desc}/>
                </div>
                <div className="work__item">
                <Card img={this.state.cards[2].image} titleItem={this.state.cards[2].title} description={this.state.cards[2].desc}/>
                <Card img={this.state.cards[3].image} titleItem={this.state.cards[3].title} description={this.state.cards[3].desc}/>
                <div className="link">
                <a href="#!">VIEW ALL PROJECTS</a>
                </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Work