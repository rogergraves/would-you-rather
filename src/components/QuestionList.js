import React, { Component } from 'react'


class QuestionList extends Component {

    render() {
        const list = this.props.questions

        console.log("passed questions list", list)

        return (
            <div>
                <ul>
                    {list.map((question) => (
                        <li key={question.id}>
                            {question.optionOne.text} -OR- {question.optionTwo.text}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default QuestionList