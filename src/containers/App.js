import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
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
        <Route exact path='/' component={Home} />
        <Route path='/questions/:id' render={({ location }) => (
          <div>
            <h1>/questions/:id path</h1>
            <Link to='/'>Go Back</Link>
          </div>
        )}/>
      </div>
    );
  }
}

export default connect()(App)
