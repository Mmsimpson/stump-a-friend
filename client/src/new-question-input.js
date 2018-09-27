import React from 'react';
import './stylesheets/new-question-form.css';

let NewQuestionInput = (props) => 
    <div className='question-input'>
        <p>{props.label}</p>
        <input 
            type='text'
            value={props.value}
            onChange={ event => {
                event.preventDefault();
                props.update(event.target.value)
            }}    
        />
    </div>

export default NewQuestionInput;