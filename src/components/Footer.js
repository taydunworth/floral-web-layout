import React, { Component } from 'react';

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
            <li><a href="https://placeholder.com"><img src="http://via.placeholder.com/30x30" /></a></li>
            <li><a href="https://placeholder.com"><img src="http://via.placeholder.com/30x30" /></a></li>
            <li><a href="https://placeholder.com"><img src="http://via.placeholder.com/30x30" /></a></li>
            <li><a href="https://placeholder.com"><img src="http://via.placeholder.com/30x30" /></a></li>
        </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
