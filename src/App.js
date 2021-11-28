import React, { Component } from 'react';
import './App.css';
import Cats from './components/Cats'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Cats/>
      </div>
    );
  }
}

export default App;
