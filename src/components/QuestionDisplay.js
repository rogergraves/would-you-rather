import React, { Component } from 'react'

class QuestionDisplay extends Component {
    componentDidMount() {
        console.log("Question ID from QuestionDisplay component is ", this.props.id)
    }

    render() {
        return (
            <div>
                {this.props.id}
            </div>
        )
    }
}

export default QuestionDisplay