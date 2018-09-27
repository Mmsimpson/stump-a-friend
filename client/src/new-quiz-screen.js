import React from 'react';
import AppHeader from './app-header';
import QuizNameForm from './quiz-name-form';
import NewQuestionForm from './new-question-form';
import { connect } from 'react-redux';
import QuestionListing from './question-listing';
import AllUsers from './all-users';


let NewQuizScreen = (props) => 
    <div>
        <AppHeader/>
        <form onSubmit={event => {
            event.preventDefault();
            //do something
        }}>
            <QuizNameForm/>
            <AllUsers />
            
            <ul>
                {props.questions.map(question => 
                    <QuestionListing question={question} key={question.id}/>
                )}
            </ul>
            <NewQuestionForm />
            <div>
                <button>Cancel</button>
                <button>Submit</button>
            </div>
        </form>
    </div>

export default connect(
    state => ({questions: state.newQuiz.questions})
)(NewQuizScreen);