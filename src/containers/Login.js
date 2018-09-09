import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from '../components/User'

class Login extends Component {
  render() {
    const users = this.props.users
    console.log("users:", users)
    return (
      <div>
        <h1>Login</h1>
        <p>Select a user to log in as:</p>
          {users.map((user) => ((
            <User user={user} />
          )))}
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  console.log("mapStateToProps run, users:", users)
  return {
    users: Object.values(users)
  }
}

export default connect(mapStateToProps)(Login)