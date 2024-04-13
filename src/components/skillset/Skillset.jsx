import Item from '../itemsSkills/Item';
import './skillset.css'
import icon1 from './../../img/icons/01_002.svg'
import icon2 from './../../img/icons/02_003.svg'
import icon3 from './../../img/icons/03_002.svg'
import icon4 from './../../img/icons/04_002.svg'

import React, { Component } from 'react'

export class Skillset extends Component {
    constructor(props){
        super(props);

        this.state = {
            items:[
                {
                    icon: icon1,
                    title: 'Product Design',
                    desc: 'Working at Facebook has taught me a lot about how to understand users, solve problems and build great products.'
                },
                {
                    icon: icon2,
                    title: 'Visual Design',
                    desc: 'My experience at dribbble has helped me learn to develop the eye for design. Colors, typography, layout and the whole package.'
                },
                {
                    icon: icon3,
                    title: 'Motion Design',
                    desc: 'I started my design journey with motion design in my college days. Motion is something that really fascinates me because of the flexibility of story telling. '
                },
                {
                    icon: icon4,
                    title: 'Photography',
                    desc: 'I started my design journey with motion design in my college days. Motion is something that really fascinates me because of the flexibility of story telling.'
                },
            ]
        }
    }
  render() {
    return (
      <div className="skillset">
        <div className="skillset__content">
            <div className="skillset__text">
                <div className="skillset__title">
                Skillset
                </div>
                <div className="skillset__desc">
                With skills in over 4 different fields of design, I am the perfect person to hire when it comes to a full fledged project. Whatever your needs are, I can pretty much take on any challenge.
                </div>
            </div>
            
            <div className="skillset__skills">
                    <Item items ={this.state.items} />
            </div>
      </div>
      </div>
    )
  }
}

export default Skillset