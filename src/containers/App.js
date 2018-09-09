import React, { Component } from 'react'
import { Route, Link, NavLink } from 'react-router-dom'
import logo from '../icon-round-question_mark.svg'
import './App.css'
import Home from './Home'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Login from './Login'

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
          <div className='navigation'>
            <NavLink exact to='/' className='navlink' activeClassName='active'>Home</NavLink>
            <NavLink exact to='/login' className='navlink' activeClassName='active'>Log In</NavLink>
          </div>
        </header>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
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
