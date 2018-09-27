import React from 'react';
import { connect } from 'react-redux';
import './stylesheets/new-question-form.css';

let QuestionListing = (props) =>
    <li>
        <div className='new-question'>
            <div className='question-block'>
                <p className='question-display'>Question: {props.question.question}</p>
                <p className='question-display'> Correct Answer: {props.question.answer}</p>
            </div>
            <div className='question-block'>
                <p className='question-display'>Incorrect 1: {props.question.incorrect1}</p>
                <p className='question-display'>Incorrect 2: {props.question.incorrect2}</p>
                <p className='question-display'>Incorrect 3: {props.question.incorrect3}</p>    
            </div>
            <button
                className='button'
                onClick={ event => {
                    event.preventDefault();
                    props.dispatch({
                        type: 'UPDATE_NEW_QUIZ_QUESTIONS',
                        questions: props.questions.filter(question => 
                            question.id !== props.question.id)
                    });
                }}
            >Remove</button>
        </div>
    </li>

export default connect(
    state => ({questions: state.newQuiz.questions})
)(QuestionListing);