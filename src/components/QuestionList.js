import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../QuestionList.css'
import QuestionDisplay from "./QuestionDisplay";


class QuestionList extends Component {

  filterQuestions = (master_list) => {
    return master_list.filter((question) =>
      this.hasVotes(question) === this.props.view_answered
    )
  }

  hasVotes(question) {
    return (
      question.optionOne.votes.length > 0 ||
      question.optionTwo.votes.length > 0
    )
  }

    render() {
        const questions_list = this.filterQuestions(this.props.questions)
        return (
            <div>
              {questions_list.length > 0 ? (
                <ul>
                  {questions_list.map((question) => (
                    <li key={question.id}>
                      <QuestionDisplay id={question.id} />
                    </li>
                  ))}
                </ul>

              ) : (
                <h4>No questions found</h4>
              )}
            </div>
        )
    }
}

function mapStateToProps({ questions }) {
  return {
    questions: Object.values(questions).sort((a,b) => b.timestamp - a.timestamp)
  }
}

export default connect(mapStateToProps)(QuestionList)