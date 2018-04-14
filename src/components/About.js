import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="about">
        <img src="/images/about.jpg" className="about-image" alt="About Image"/>
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
        </div>
      </div>
    );
  }
}

export default About;
