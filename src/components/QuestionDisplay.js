import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../QuestionDisplay.css'

class QuestionDisplay extends Component {
    render() {
      console.log("question for "+this.props.id+":", this.props.question)
      console.log("user for "+this.props.id+":", this.props.user)
        return (
            <div className='outer_box'>
              <div>
                <img src={this.props.user_avatar} />
                <br />
                {this.props.user_name}
              </div>
              <div>
                <div className='question'>
                  {this.props.question_option_1_text}
                  <br />
                  --OR--
                  <br />
                  {this.props.question_option_2_text}
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
    question_option_1_text: question.optionOne.text,
    question_option_2_text: question.optionTwo.text
  }
}

export default connect(mapStateToProps)(QuestionDisplay)