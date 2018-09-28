import { createStore } from 'redux';
import reducer from './reducer';

let initialState = {
    currentUser: {id: 1, userName: 'testuser'},
    users: [],
    newQuiz: {
        id: '',
        name: '',
        questions: [],
        recipient: ''
    },
    quizzesCreated: [],
};

let store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;