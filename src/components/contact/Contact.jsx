import './contact.css'

import React, { Component } from 'react'

export class Contact extends Component {
  render() {
    return (
      <div id='cont' className="contact">
        <div className="contact__content">
            <div className="contact__title">
                <span>Let’s get started</span>
                Now that you know a lot about me, let me know if you are interested to work with me.
            </div>
            <div className="contact__form">
                <form action="#!" method="post">
                    <label>Name</label>
                    <input type="text" name="UserName" id="" />
                    <label>Email</label>
                    <input type="email" name="UserEmail" id="" />
                    <label>Message</label>
                    <textarea name="mess" id="" cols="30" rows="10"></textarea>
                    <input type="submit" value="Let’s get started" />
                </form>
            </div>
        </div>
      </div>
    )
  }
}

export default Contact