import Card from '../cardsCompany/Card';
import './exp_work.css'

import React, { Component } from 'react'

export class Exp_work extends Component {
    constructor(props){
        super(props);
        this.state = {
            cards:[
                {
                    num: '01',
                    titleColor: <span style={{color:'#3CC74E'}}>Google</span>,
                    title: ', Interaction Designer',
                    description: 'I currently am the lead designer on the interaction design team for Google Play.'
                },
                {
                    num: '02',
                    titleColor: <span style={{color:'#5221E6'}}>Facebook</span>,
                    title: ', Product Designer',
                    description: 'I’ve worked on a wide variety of internal tools for facebook over the past 6 years.'
                },
                {
                    num: '03',
                    titleColor:  <span style={{color:'#E95D90'}}>Dribbble</span>,
                    title: ', Graphic Designer',
                    description: 'I started my design career with Dribbble. I was incharge of creating illustrations for the platform.'
                },
            ]
        }
    }
  render() {
    return (
      <div className="exp__work">
            <div className="exp__title">
                <span>work experience</span>
                Companies I have worked for in the past
            </div>
            <div className="exp__workInCompan">
                <Card cards={this.state.cards}/>
            </div>
      </div>
    )
  }
}

export default Exp_work