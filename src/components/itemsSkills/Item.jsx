import './item.css'
import icon from './../../img/icons/01_002.svg'
import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div className="items">
        {this.props.items.map(el => (
            <div className="item">
                <img src={el.icon} alt="icon" />
                <div className="item__title">
                    {el.title}
                </div>
                <div className="item__desc">
                    {el.desc}
                </div>
            </div>
        ))}
      </div>
    )
  }
}

export default Item