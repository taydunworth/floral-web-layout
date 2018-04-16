import React, { Component } from 'react';
import portfolios from '../Portfolio';

class Work extends Component {
  constructor(props) {
    super(props)
    this.state = {
      portfolios: []
    }
  }


  componentWillMount() {
    this.setState({ portfolios })
  }

  render(){
    let pieces = this.state.portfolios.map(piece => {
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
