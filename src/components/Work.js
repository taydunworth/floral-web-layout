import React, { Component } from 'react';

class Work extends Component {

  state = {
    portfolio: {}
  }

  componentDidMount() {
    fetch('../Portfolio').then(res => res.json()).then(({ portfolio }) => {
      this.setState({ portfolio })
    })
  }

  render(){
    let pieces = this.state.portfolio.map(piece => {
      return (
        <li key={piece.id}>
          <p>{piece.name}</p>
        </li>
        )
      })

    return (
      <div classname="work" id="Work">
        <ul>{pieces}</ul>
      </div>
    );
  }
}

export default Work;
