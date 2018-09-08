import React, { Component } from 'react'
import logo from '../icon-round-question_mark.svg'
import './App.css'
import Home from './Home'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Would You Rather</h1>
        </header>
        <Home />
      </div>
    );
  }
}

export default connect()(App)
