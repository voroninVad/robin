import './card.css'

import React, { Component } from 'react'

export class Card extends Component {
  render() {
    return (
        <div className="cards">
            {this.props.cards.map(el => (
                <div className="card">
                        <div className="work__titleNum">{el.num}</div>
                        <div className="work__name-compan">{el.titleColor}{el.title}</div>
                        <div className="work__desc">{el.description}</div>
                </div>     
            ))}
        </div>
    )
  }
}

export default Card