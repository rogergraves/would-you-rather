import React, { Component } from 'react'
import '../QuestionList.css'


class QuestionList extends Component {

    state = {
        view_answered: false
    }

    toggleViewAnswer = (e) => {
        this.setState(prevState => ({
            view_answered: !prevState.view_answered
        }))
    }

    render() {
        console.log("viewed_answered", this.state.view_answered)

        return (
            <div>
                <h3>Question List</h3>
                <div class='ListTypeSelect'>
                    <input type='radio'
                           value='true'
                           name='view_answered'
                           checked={this.state.view_answered}
                           onChange={this.toggleViewAnswer}
                    /> Answered
                </div>
                <div className='ListTypeSelect'>
                    <input type='radio'
                           value='false'
                           name='view_answered'
                           checked={!this.state.view_answered}
                           onChange={this.toggleViewAnswer}
                    /> Unanswered
                </div>
                
            </div>
        )
    }
}

export default QuestionList