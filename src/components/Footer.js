import React, { Component } from 'react';
import Instagram from '../images/instagram.svg';
import Pinterest from '../images/pinterest.svg';
import LinkedIn from '../images/linkedin.svg';
import Twitter from '../images/twitter.svg';


class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <h3>Lorem Ipsum<br />Dolor</h3>
        <div className="nav">
          <ul>
            <li><a href="#About">About</a></li>
            <li><a href="#Work">Work</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </div>
        <div className="social">
          <ul>
            <li><a href="https://pinterest.com"><img src={Pinterest} /></a></li>
            <li><a href="https://twitter.com"><img src={Twitter} /></a></li>
            <li><a href="https://linkedin.com"><img src={LinkedIn} /></a></li>
            <li><a href="https://instagram.com"><img src={Instagram} /></a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
