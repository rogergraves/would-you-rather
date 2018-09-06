import React, { Component } from 'react'
import * as DataAPI from '../utils/_DATA'

class QuestionDisplay extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        DataAPI._getUsers().then((data) => {
            this.setState({
                users: data
            })

            console.log("Question ID is "+this.props.id+", users:", data)
        })
    }

    render() {
        return (
            <div>
                {this.props.question.optionOne.text}
                -OR-
                {this.props.question.optionTwo.text}
            </div>
        )
    }
}

export default QuestionDisplay