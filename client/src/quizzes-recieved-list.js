import React from 'react';
import QuizRow from './quiz-row';

let QuizzesRecievedList = (props) => 
    <ul className='quiz-recieved-list'>
        {props.quizzes.map(quiz => 
            <QuizRow quiz={quiz} key={quiz.id} />
        )}
    </ul>

export default QuizzesRecievedList;