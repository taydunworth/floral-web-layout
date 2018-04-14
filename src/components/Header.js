import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="nav">
        <ul>
          <li><a href="#About">About</a></li>
          <li><a href="#Work">Work</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </div>
    );
  }
}

export default Header;
