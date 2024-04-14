import './card.css'

import React, { Component } from 'react'

export class Cards extends Component {
  render() {
    return (
      <div className="review__cards">
        {this.props.cards.map(el => (
            <div className="reviews_card__content">
                <div className="reviews_card__img">
                    <img src={el.image} alt="" />
                </div>
                <div className="reviews_card__text">
                    <div className="card__title">
                        {el.review}
                    </div>
                    <div className="card__from">
                        <span>{el.name}</span>
                        <span>{el.company}</span>
                    </div>
                </div>
            </div>
        ))}
      </div>
    )
  }
}

export default Cards