import './card.css'

import React, { Component } from 'react'

export class Card extends Component {
    componentDidMount(){
        let first = document.querySelector('.work__name-compan');
    first.innerHTML = first.innerHTML.replace(/(^ ?|<br> ?|[!?.] .*?)([\wа-яё]+)/gim, '$1<span class="hl">$2</span>');
    }
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