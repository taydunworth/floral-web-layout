import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="left">
          <h2>Contact.</h2>
          <div className="contact-box">
            <input type="text" className="one-half"/>
            <input type="text" className="one-half"/>
            <input type="text" className="full"/>
            <input type="text" className="full"/>
            <textarea></textarea>
          </div>
        </div>
        <div className="right">
          <img src="/images/contact.jpg" alt="Bouquet" />
        </div>

      </div>
    );
  }
}

export default Contact;
