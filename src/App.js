import React, { Component } from 'react';
import './App.css';
import Circles from './components/Circles';
import CircleSelector from './components/CircleSelector';

export default class App extends Component {
  state = {
    one:true,
    two:false,
    three:false,
    four:false,
  };

  handleClick = (evt) =>{
    console.log(evt)
    this.setState({
      one: false,
      two: false,
      three: false,
      four: false,
      [evt.target.name]: true,
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <h4>{this.state.status}</h4>
          <CircleSelector handleClick={this.handleClick} one={this.state.one} two={this.state.two} three={this.state.three} four={this.state.four}/>
          <Circles one={this.state.one} two={this.state.two} three={this.state.three} four={this.state.four} />
        </main>
      </div>
    );
  }
}
