import React, { Component } from 'react';
import AppHeader from './app-header';

class NewQuizFormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionName: '',
            question: '',
            answer: '',
            questions: []
        };
    };
    render() {
        let updateQuizTitle = (value) => {
            this.setState({
                questionName: value
            });
        };
        return (
            <div>
                <AppHeader />
                <form>
                    <p>Quiz Name</p>
                    <input
                        type='text'
                        onChange={ (event) => {
                            event.preventDefault();
                            updateQuizTitle(event.target.value);
                        }}
                    />
                    <div>
                        <button>Cancel</button>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default NewQuizFormContainer;