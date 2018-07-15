import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Menu />
        </header>
        <p className="App-intro">
          Hi there. Welcome to my page
        </p>
        <div>
          <img src={require('./assets/me.jpg')}/>
        </div>
      </div>
    );
  }
}

export default App;
