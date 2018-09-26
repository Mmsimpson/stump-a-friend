import React from 'react';
import { connect } from 'react-redux';
import generateId from './generate-id';

let QuizQuestionButton = (props) => 
    <button
        onClick={ event => {
            event.preventDefault();
            props.dispatch({
                type: props.actionType,
                id: generateId(),
                question: props.question,
                answer: props.answer
            });
            props.clearState();
        }}
    >{props.label}</button>

export default connect(
    state => ({newQuiz: state.newQuiz})
)(QuizQuestionButton);