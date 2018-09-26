import React from 'react';
import AppHeader from './app-header';
import QuizNameForm from './quiz-name-form';
import NewQuestionForm from './new-question-form';
import { connect } from 'react-redux';
import QuestionListing from './question-listing';


let NewQuizScreen = (props) => {
    props.questions.map(question => {
        console.log(question);
        console.log(`Question: ${question.question}`);
        console.log(`Answer: ${question.answer}`);
    });
    return <div>
        <AppHeader/>
        <form>
            <QuizNameForm/>
            
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
};

export default connect(
    state => ({questions: state.newQuiz.questions})
)(NewQuizScreen);