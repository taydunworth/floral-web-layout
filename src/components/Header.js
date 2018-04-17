import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fullNav: false,
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

    componentDidMount() {
      window.addEventListener("scroll", this.handleScroll)
    }

    componentWillUnmount() {
      window.removeEventListener("scroll", this.handleScroll)
    }

    handleScroll(e) {
      let location = window.scrollTop
      if (location === 400) {
        this.setState({
          fullNav: true,
        })
        console.log("I am working");
      }
    }

  render() {
    return (
      <div className="header">
        <div className={ this.state.fullNave ? "fullNav nav" : "nav" }>
          <ul>
            <li><a href="#About">About</a></li>
            <li><a href="#Work">Work</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
