import React from 'react';

let NewQuestionInput = (props) => 
    <div>
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