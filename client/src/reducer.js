let updateNewQuizName = (oldState, action) => {
    let newQuizName = {...oldState.newQuiz, name: action.quizName};
    return {...oldState, newQuiz: newQuizName};
};

let addQuestionToQuiz = (oldState, action) => {
    let newQuestionsList = [...oldState.newQuiz.questions, {
        id: action.id,
        question: action.question,
        answer: action.answer,
        incorrect1: action.incorrect1,
        incorrect2: action.incorrect2,
        incorrect3: action.incorrect3,
    }];
    let newQuiz = {...oldState.newQuiz, questions: newQuestionsList}
    return {...oldState, newQuiz: newQuiz};
};

let updateNewQuizQuestions = (oldState, action) => {
    let newQuestionsList = {...oldState.newQuiz, questions: action.questions};
    return {...oldState, newQuiz: newQuestionsList};
};

let getUsers = (oldState, action) => {
    return {...oldState, users: action.result};
};

let updateQuizRecipient = (oldState, action) => {
    let newQuizRecipient = {...oldState.newQuiz, recipient: action.recipient};
    return {...oldState, newQuiz: newQuizRecipient };
};

let reducers = {
    'UPDATE_QUIZ_NAME': updateNewQuizName,
    'ADD_QUESTION_TO_QUIZ': addQuestionToQuiz,
    'UPDATE_NEW_QUIZ_QUESTIONS': updateNewQuizQuestions,
    'GET_USERS': getUsers,
    'UPDATE_QUIZ_RECIPIENT': updateQuizRecipient

};

let reducer = (oldState, action) => {
    let doer = reducers[action.type];
    return doer ? doer(oldState, action) : oldState;
};


export default reducer;