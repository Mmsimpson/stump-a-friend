import React from 'react';

let QuizRow = (props) =>
    <li className='quiz-row'>
        <p>{props.quiz.name}</p>
    </li>

export default QuizRow;