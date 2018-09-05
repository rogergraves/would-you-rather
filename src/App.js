import React, { Component } from 'react';
import logo from './icon-round-question_mark.svg';
import './App.css';
import Login from './components/Login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Would You Rather</h1>
        </header>
        <p className="App-intro">
            <Login />
        </p>
      </div>
    );
  }
}

export default App;
