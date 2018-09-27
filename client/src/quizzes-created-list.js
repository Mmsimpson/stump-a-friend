import React from 'react';
import QuizRow from './quiz-row';

let QuizzesCreatedList = (props) => 
    // <p>My Quizzes</p>
    <ul className='quiz-created-list'>
        {props.quizzes.map(quiz => 
            <QuizRow quiz={quiz} key={quiz.id} />
        )}
    </ul>

export default QuizzesCreatedList;