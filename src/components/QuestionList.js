import React, { Component } from 'react'
import QuestionDisplay from "./QuestionDisplay";


class QuestionList extends Component {
    render() {
        const list = this.props.questions

        console.log("passed questions list", list)

        return (
            <div>
                <ul>
                    {list.map((question) => (
                        <QuestionDisplay key={question.id} question={question} />
                    ))}
                </ul>
            </div>
        )
    }
}

export default QuestionList