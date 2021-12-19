import React, { Component } from 'react';
import './App.css';
import Cats from './components/Cats'
import DisplayCat from './components/DisplayCat';
import cats from './cats-data';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      cats: []
    }
  }

  compotentDidMount() {
    this.setState({
      cats: cats
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Cat Tinder</h1>
        <DisplayCat cat={this.state.cats[0]} />
        <Cats cats={this.state.cats}/>
      </div>
    );
  }
}

export default App;
