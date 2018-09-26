import React from 'react';

let QuestionListing = (props) =>
    <li>
        <p>Question: {props.question.question}</p>
        <p>Answer: {props.question.answer}</p>
        <button>Remove</button>

    </li>

export default QuestionListing;