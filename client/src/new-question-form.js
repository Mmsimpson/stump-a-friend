import React from 'react';
import NewQuestionInput from './new-question-input';
import QuizQuestionButton from './quiz-question-button';
import './stylesheets/new-question-form.css';

class NewQuestionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            answer: '',
            incorrect1: '',
            incorrect2: '',
            incorrect3: '',
        };
    };
    render() {

        let updateQuestion = value => {
            this.setState({
                question: value
            });
        };

        let updateCorrectAnswer = value => {
            this.setState({
                answer: value
            });
        };
        let updateIncorrect1 = value => {
            this.setState({
                incorrect1: value
            });
        };
        let updateIncorrect2 = value => {
            this.setState({
                incorrect2: value
            });
        };
        let updateIncorrect3 = value => {
            this.setState({
                incorrect3: value
            });
        };

        let clearState = () => {
            this.setState({
                question: '',
                answer: '',
                incorrect1: '',
                incorrect2: '',
                incorrect3: ''
            });
        };

        return (
            <div>
                <div className='new-question'>
                    <div className='question-block'>
                        <NewQuestionInput label='Question' update={updateQuestion} value={this.state.question}/>
                        <NewQuestionInput label='Correct Answer' update={updateCorrectAnswer} value={this.state.answer}/>
                    </div>
                    <div className='question-block'>
                        <NewQuestionInput label='Incorrect 1' update={updateIncorrect1} value={this.state.incorrect1}/>
                        <NewQuestionInput label='Incorrect 2' update={updateIncorrect2} value={this.state.incorrect2}/>
                        <NewQuestionInput label='Incorrect 3' update={updateIncorrect3} value={this.state.incorrect3}/>
                    </div>
                    <div>
                    <QuizQuestionButton
                        label='ADD' 
                        question={this.state.question} 
                        answer={this.state.answer}
                        incorrect1={this.state.incorrect1}
                        incorrect2={this.state.incorrect2}
                        incorrect3={this.state.incorrect3}
                        actionType='ADD_QUESTION_TO_QUIZ'
                        clearState={clearState}
                    />
                </div>
                </div>
            </div>
        )
    };
};

export default NewQuestionForm;