import { createStore } from 'redux';
import reducer from './reducer';

let initialState = {
    currentUser: {id: 1, userName: 'testUser'},
    newQuiz: {
        name: '',
        questions: []
    }
};

let store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;