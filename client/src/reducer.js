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


let reducers = {
    'UPDATE_QUIZ_NAME': updateNewQuizName,
    'ADD_QUESTION_TO_QUIZ': addQuestionToQuiz
};

let reducer = (oldState, action) => {
    let doer = reducers[action.type];
    return doer ? doer(oldState, action) : oldState;
};


export default reducer;