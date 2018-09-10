import React, { Component } from 'react'
import './User.css'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class User extends Component {

  handleSelectedUser = (e) => {
    e.preventDefault()
    const { dispatch, user } = this.props
    console.log("handleSelectedUser this.props", this.props)

    dispatch(setAuthedUser(user.id))

    // Redirect here
  }

  render() {
    const user = this.props.user

    return (
      <form onSubmit={this.handleSelectedUser}>
        <div className='user'>
          <img src={user.avatarURL} alt={user.name} className='avatar' />
          <div className='right_side_name'>
            <span className='name'>{user.name}</span>
            <button className='login_button'>Select</button>
          </div>
        </div>
      </form>
    )
  }
}

export default connect()(User)