import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Button />
      </div>
    );
  }
}

class Thing extends Component
{
  constructor()
  {
    super();
  }

  render()
  {
    return(
      <div> This is my {this.props.thingId} thing </div>
    );
  }
}

class Button extends Component
{
  constructor()
  {
    super();
    this.state = { clicks: 0 };
  }

  onClick()
  {
    let clicks = this.state.clicks;
    clicks++;

    this.setState( { clicks: clicks } );
  }

  render()
  {
    let things = [];

    for (let i = 0; i < this.state.clicks; i++ )
    {
      things.push(<Thing thingId={i} />);
    }

    return(
      <div>
        <input
          onClick={this.onClick.bind(this)}
          type="button"
          value={"Clicked : " + this.state.clicks }
        />

        {things}

      </div>
    );
  }

}

export default App;
