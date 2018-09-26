import React from 'react';
import { connect } from 'react-redux';

let QuizNameForm = (props) => 
    <div>
        <p>Quiz Name</p>
        <input 
            type='text'
            onChange={ event => {
                event.preventDefault();
                props.dispatch({
                    type: 'UPDATE_QUIZ_NAME',
                    quizName: event.target.value
                })
            }}
        />
    </div>

export default connect(
    state => ({quizName: state.newQuiz.name})
)(QuizNameForm);