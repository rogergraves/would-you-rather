import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'
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
    const authedUser = this.props.authedUser

    return (
      <div className="App">
        <Router>
          <div>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to Would You Rather</h1>
              <div className='navigation'>
                {authedUser ? (
                  <p className='welcome_message'>Welcome {authedUser}</p>
                ) : (
                  <NavLink exact to='/login' className='navlink' activeClassName='active'>Log In</NavLink>
                )}
                <NavLink exact to='/' className='navlink' activeClassName='active'>Home</NavLink>
              </div>
            </header>

            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route path='/questions/:id' render={({ location }) => (
                <div>
                  <h1>/questions/:id path</h1>
                  <Link to='/'>Go Back</Link>
                </div>
              )}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

function mapStateToProps({authedUser}) {
  console.log("authedUser:", authedUser)

  return {
    authedUser: authedUser
  }
}

export default connect(mapStateToProps)(App)
