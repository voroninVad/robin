import './reviews.css'

import img_Card1 from './../../img/01_006.avif'
import img_Card2 from './../../img/02_003.avif'
import img_Card3 from './../../img/03.avif'

import React, { Component } from 'react'
import Card from '../cardsWork/Card'
import Cards from '../cardsReviews/Cards'

export class Reviews extends Component {
    constructor(props){
        super(props);

        this.state = {
            cards:[
                {
                    image: img_Card1,
                    review: '‘’Robin is one of the best designers I have worked with in my entire life. He is a designer who is very capable of taking up complex projects and delivers impeccable design.’’',
                    name: 'Richard Owens',
                    company: 'CEO, Company 1'
                },
                {
                    image: img_Card2,
                    review: '‘’I think Robin has an incredible gift. It has been an absolute pleasure to work with a designer of this caliber.’’',
                    name: 'REmily Parker',
                    company: 'CEO, Company 2'
                },
                {
                    image: img_Card3,
                    review: '‘’All I can say that, Robin is a phenomenal designer. The wavelength at which he thinks is astoundaing. I love the focus, passion and attention to detial in the design.’’',
                    name: 'Vincent  Rudd',
                    company: 'CEO, Company 3'
                },
            ]
        }
    }
  render() {
    return (
      <div className="reviews">
        <div className="reviews__content">
            <div className="reviews__about-me">
                <div className="about-me__title">
                This is what people say about me
                </div>
                <div className="about-me__desc">
                Here are a few lines from people who I have worked with over the past 8+ years in my design career.
                </div>
                <div className="about-me__link">
                    <a href="#!">See all testimonials</a>
                </div>
            </div>
            <div className="reviews__cards">
                <Cards cards={this.state.cards}/>
            </div>
        </div>
      </div>
    )
  }
}

export default Reviews