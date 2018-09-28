import React from 'react';
import AppHeader from './app-header';
import QuizNameForm from './quiz-name-form';
import NewQuestionForm from './new-question-form';
import { connect } from 'react-redux';
import QuestionListing from './question-listing';
import AllUsers from './all-users';
import generateId from './generate-id';
import {API_URL} from './variables';

let NewQuizScreen = (props) => 
    <div>
        <AppHeader/>
        <form onSubmit={event => {
            event.preventDefault();
            let quizId = generateId();
            fetch(API_URL + '/quizzes', {
                method: 'POST',
                body: JSON.stringify({
                    id: quizId,
                    name: props.newQuiz.name,
                    created_by: props.currentUser.id,
                    recipient: props.newQuiz.recipient,
                    questions: props.newQuiz.questions
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(() => {
                props.history.push(`/user/${props.currentUser.id}`);
                props.dispatch({
                    type: 'CLEAR_NEW_QUIZ_DATA',
                    newQuiz: {
                        id: '',
                        name: '',
                        questions: [],
                        recipient: ''
                    }
                })
            })
        }}>
            <QuizNameForm/>
            <AllUsers />
            <ul>
                {props.newQuiz.questions.map(question => 
                    <QuestionListing question={question} key={question.id}/>
                )}
            </ul>
            <NewQuestionForm />
            <div>
                <button>Cancel</button>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </div>

export default connect(
    state => ({newQuiz: state.newQuiz, currentUser: state.currentUser })
)(NewQuizScreen);