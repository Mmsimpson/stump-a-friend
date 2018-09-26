import React from 'react';
import QuizRow from './quiz-row';
import { connect } from 'react-redux';

let QuizzesCreatedList = (props) =>
    <ul className='quiz-created-list'>
        {props.quizzes.map(quiz => 
            <QuizRow quiz={quiz} key={quiz.id} />
        )}
    </ul>

export default connect(
    state => ({ quizzes: state.myQuizzes.created })
)(QuizzesCreatedList)