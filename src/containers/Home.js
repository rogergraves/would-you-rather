import React, { Component } from 'react'
import QuestionList from "../components/QuestionList";

class Home extends Component {

    render() {
        return (
            <div>
                <h2>Home Page</h2>
                <QuestionList />
            </div>
        )
    }
}

export default Home