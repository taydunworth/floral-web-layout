import React, { Component } from 'react';
import Instagram from '../images/instagram.svg';
import Pinterest from '../images/pinterest.svg';
import LinkedIn from '../images/linkedin.svg';
import Twitter from '../images/twitter.svg';

class About extends Component {
  render() {
    return (
      <div className="about" id="About">
        <img src="/images/about.jpg" className="about-image" alt="About"/>
        <div className="about-copy">
          <h2>About.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            congue, sapien at sagittis malesuada, felis velit laoreet eros,
            elementum bibendum enim lectus et turpis. Aliquam aliquam nibh
            eget tellus volutpat, quis pharetra nulla finibus. Integer
            lobortis nunc mi, vel eleifend turpis aliquam nec.
          </p>
          <p>
            Fusce ut orci in lorem ultricies maximus. Morbi vitae pretium
            ipsum. In a volutpat tortor, et ultrices libero. Phasellus at
            tincidunt massa, a semper nulla.
          </p>
          <div className="social">
            <ul>
              <li><a href="https://pinterest.com"><img src={Pinterest} alt="Pinterest" /></a></li>
              <li><a href="https://twitter.com"><img src={Twitter} alt="Twitter" /></a></li>
              <li><a href="https://linkedin.com"><img src={LinkedIn} alt="LinkedIn" /></a></li>
              <li><a href="https://instagram.com"><img src={Instagram} alt="Instagram" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
