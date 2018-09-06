import React, { Component } from 'react'
import * as DataAPI from '../utils/_DATA'

class Login extends Component {
    render() {
        console.log("_getUsers()", DataAPI._getUsers())
        return (
            <div>
                <h2>Login</h2>
            </div>
        )
    }

}

export default Login