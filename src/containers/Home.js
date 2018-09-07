import React, { Component } from 'react'
import QuestionList from '../components/QuestionList'
import '../Home.css'

class Home extends Component {

    state = {
        view_answered: false
    }

    toggleViewAnswer = (e) => {
        this.setState(prevState => ({
            view_answered: !prevState.view_answered
        }))
    }

    render() {
        return (
            <div>
                <h2>Home Page</h2>
                <div className='ListTypeSelect'>
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
                <QuestionList view_answered={this.state.view_answered} />
            </div>
        )
    }
}

export default Home