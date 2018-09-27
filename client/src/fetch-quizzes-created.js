import React from 'react';
import { API_URL } from './variables';

let fetchQuizzesCreated = (Component) =>  
    class FetchQuizzesCreated extends React.Component {
        componentDidMount() {
            fetch(API_URL + `/users/${this.props.user.id}/quizzes/created`)
                .then(res => res.json())
                .then(quizzes => {
                    this.props.dispatch({
                        type: 'LOAD_QUIZZES_CREATED',
                        quizzes: quizzes.data
                    });
                });
        }
        
        render() {
            return <Component {...this.props} />
        }
    };

export default fetchQuizzesCreated;