import React, { Component } from 'react'
import * as DataAPI from '../utils/_DATA'
import QuestionList from '../components/QuestionList'
import '../Home.css'

class Home extends Component {

    state = {
        view_answered: false,
        loading: true,
        questions: []
    }

    toggleViewAnswer = (e) => {
        this.setState(prevState => ({
            view_answered: !prevState.view_answered,
            loading: true
        }))
        this.getQuestions()
    }

    getQuestions = () => {
        DataAPI._getQuestions().then((obj) => {
            this.setState({
                loading: false,
                questions: this.filterQuestions(Object.values(obj))
            })
        })
    }

    componentDidMount() {
        this.getQuestions()
    }

    filterQuestions = (master_list) => {
        return master_list.filter((question) =>
            this.hasVotes(question) === this.state.view_answered
        )
    }

    hasVotes(question) {
        return (
            question.optionOne.votes.length > 0 ||
            question.optionTwo.votes.length > 0
        )
    }


    render() {
        console.log("loading:", this.state.loading);
        console.log("questions:", this.state.questions);
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
                {this.state.loading ? (
                    <h4>Loading...</h4>
                ) : (
                    <QuestionList questions={this.state.questions} />
                )}

            </div>
        )
    }
}

export default Home