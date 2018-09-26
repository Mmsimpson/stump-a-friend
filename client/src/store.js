import { createStore } from 'redux';
import reducer from './reducer';

let initialState = {
    currentUser: {id: 1, userName: 'testUser'},
    newQuiz: {
        name: '',
        questions: []
    },
    myQuizzes: {
        created: [
        {
            id: 1, 
            name: 'quiz1', 
            questions: [{
                id: 1,
                question: 'question 1',
                answer: 'answer 1 to question 1'
            },
            {
                id: 2, 
                question: 'question 2',
                answer: 'answer 2 to question 2'
            }]
        }, 
        {
            id: 2,
            name: 'quiz2',
            questions: [{
                id: 456,
                question: 'What is the capital of Georgia?',
                answer: 'Atlanta'
            },
            {
                id: 879,
                question: 'In Spanish, what is the nickname for New York City?',
                answer: 'La manazana grande'
            }]
        }
    ],
        received: []
    }
};

let store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;