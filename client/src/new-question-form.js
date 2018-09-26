import React from 'react';
import NewQuestionInput from './new-question-input';
import QuizQuestionButton from './quiz-question-button';

class NewQuestionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            answer: ''
        };
    };
    render() {

        let updateQuestion = value => {
            this.setState({
                question: value
            });
        };

        let updateAnswer = value => {
            this.setState({
                answer: value
            });
        };

        let clearState = () => {
            this.setState({
                question: '',
                answer: ''
            });
        };

        return (
            <div>
                <NewQuestionInput label='Question' update={updateQuestion} value={this.state.question}/>
                <NewQuestionInput label='Answer' update={updateAnswer} value={this.state.answer}/>
                <div>
                    <QuizQuestionButton 
                        label='ADD' 
                        question={this.state.question} 
                        answer={this.state.answer}
                        actionType='ADD_QUESTION_TO_QUIZ'
                        clearState={clearState}
                    />
                </div>
            </div>
        )
    };
};

export default NewQuestionForm;