import React from 'react';
import { connect } from 'react-redux';

let QuestionListing = (props) =>
    <li>
        <p>Question: {props.question.question}</p>
        <p>Answer: {props.question.answer}</p>
        <button
            onClick={ event => {
                event.preventDefault();
                props.dispatch({
                    type: 'UPDATE_NEW_QUIZ_QUESTIONS',
                    questions: props.questions.filter(question => 
                        question.id !== props.question.id)
                });
            }}
        >Remove</button>

    </li>

export default connect(
    state => ({questions: state.newQuiz.questions})
)(QuestionListing);