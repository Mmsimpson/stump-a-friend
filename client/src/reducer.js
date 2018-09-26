let updateNewQuizName = (oldState, action) => {
    let newQuizName = {...oldState.newQuiz, name: action.quizName};
    return {...oldState, newQuiz: newQuizName};
};

let addQuestionToQuiz = (oldState, action) => {
    let newQuestionsList = [...oldState.newQuiz.questions, {
        id: action.id,
        question: action.question,
        answer: action.answer
    }];
    let newQuiz = {...oldState.newQuiz, questions: newQuestionsList}
    return {...oldState, newQuiz: newQuiz};
};

let updateNewQuizQuestions = (oldState, action) => {
    let newQuestionsList = {...oldState.newQuiz, questions: action.questions};
    return {...oldState, newQuiz: newQuestionsList};
};

let reducers = {
    'UPDATE_QUIZ_NAME': updateNewQuizName,
    'ADD_QUESTION_TO_QUIZ': addQuestionToQuiz,
    'UPDATE_NEW_QUIZ_QUESTIONS': updateNewQuizQuestions

};

let reducer = (oldState, action) => {
    let doer = reducers[action.type];
    return doer ? doer(oldState, action) : oldState;
};


export default reducer;