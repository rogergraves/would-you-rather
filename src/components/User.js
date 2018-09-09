import React, { Component } from 'react'
import './User.css'

class User extends Component {
  render() {
    const user = this.props.user

    return (
      <div className='user'>
        <img src={user.avatarURL} alt={user.name} className='avatar' />
        <div className='right_side_name'>
          <span className='name'>{user.name}</span>
          <button className='login_button'>Select</button>
        </div>
      </div>
    )
  }
}

export default User