import React from 'react';
import { API_URL } from './variables';

let fetchQuizzesRecieved = (Component) =>  
    class FetchQuizzesRecieved extends React.Component {
        componentDidMount() {
            console.log(this.props.user.id)
            fetch(API_URL + `/users/${this.props.user.id}/quizzes/recieved`)
                .then(res => res.json())
                .then(quizzes => {
                    this.props.dispatch({
                        type: 'LOAD_QUIZZES_RECIEVED',
                        quizzes: quizzes.data
                    });
                });
        }
        
        render() {
            return <Component {...this.props} />
        }
    };

export default fetchQuizzesRecieved;