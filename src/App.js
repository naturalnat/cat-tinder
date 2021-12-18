import React, { Component } from 'react';
import './App.css';
import Cats from './components/Cats'
import DisplayCat from './components/DisplayCat';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Cat Tinder</h1>
        <DisplayCat />
        <Cats/>
      </div>
    );
  }
}

export default App;
