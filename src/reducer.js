let reducers = {
    'USER_LOGIN': userLogin
};

let reducer = (oldState, action) => {
    let doer = reducers[action.type];
    return doer ? doer(oldState, action) : oldState;
};

export default reducer;