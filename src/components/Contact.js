import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="left">
          <h2>Contact.</h2>
          <div className="contact-box">
            <div className="half-row">
              <input type="text" className="one-half" placeholder="First Name" />
              <input type="text" className="one-half" placeholder="Last Name" />
            </div>
            <input type="text" className="full" placeholder="Email Address" />
            <input type="text" className="full" placeholder="Subject" />
            <textarea placeholder="Message"></textarea>
          </div>
        </div>
        <div className="right">
          <div className="img-box"></div>
          <button>Let's Talk.</button>
        </div>

      </div>
    );
  }
}

export default Contact;
