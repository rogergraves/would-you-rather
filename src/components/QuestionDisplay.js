import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './QuestionDisplay.css'

class QuestionDisplay extends Component {
    render() {
        return (
            <div className='outer_box'>
              <div>
                <img src={this.props.user_avatar} alt={this.props.user_name} />
                <br />
                {this.props.user_name}
              </div>
              <div>
                <div className='question'>
                  {this.props.question_option_1_text}
                  <div className='or'>--OR--</div>
                  {this.props.question_option_2_text}
                </div>
                <div className='view_poll_button'>
                  <Link to={this.props.question_link}>
                    <button>View Poll</button>
                  </Link>
                </div>
                <div className='timestamp'>
                  {this.props.question_timestamp}
                </div>
              </div>
            </div>
        )
    }
}


function mapStateToProps({ users, questions }, {id}) {
  const question = questions[id]
  const user = users[question.author]

  return {
    user_name: user.name,
    user_avatar: user.avatarURL,
    question_link: "/questions/"+question.id,
    question_option_1_text: question.optionOne.text,
    question_option_2_text: question.optionTwo.text,
    question_timestamp: (new Date(question.timestamp).toDateString())
  }
}

export default connect(mapStateToProps)(QuestionDisplay)