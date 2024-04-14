import './card.css'

import React, { Component } from 'react'

export class Card extends Component {
  render() {
    return (
      <div className="cardItem">
        <img src={this.props.img} alt="" />
        <div className="cardItem__content">
            <div className="cardItem__title">
             {this.props.titleItem}
            </div>
            <div className="cardItem__desc">
            {this.props.description}
            </div>
        </div>
      </div>
    )
  }
}

export default Card