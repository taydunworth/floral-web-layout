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
          <div className="portfolio-piece">
            <img src={piece.image} alt={piece.name} />
          </div>
        </li>
        )
      })

    return (
      <div className="work" id="Work">
        <h2>Work.</h2>
        <ul>{pieces}</ul>
      </div>
    );
  }
}

export default Work;
