const pg = require('pg-promise')();
const postGres = require('./variables.js');
const db = pg(postGres.PG_LINK); 

let usernameLogin = (username, password) => {
    return db.one(`select username, password, id
    FROM users
    WHERE username = '` + username + `'
    AND password = '` + password + `';`)
}

let createUser = (username, password, email) => {            
    return db.one(`INSERT INTO users (username, password, email) values    
    ('` + username + `', '` + password + `', '` + email + `')
    RETURNING *;`);  
} 

let getUsers = () => {
    return db.query('SELECT id, username FROM users;');
};

let getQuizzesCreated = (userId) => {
    return db.query(`SELECT * FROM quizzes WHERE quizzes.created_by = ${userId};`);
};

let addNewQuiz = (quiz) => {
    return db.query(`INSERT INTO quizzes (id, created_by, sent_to, name)
        VALUES ('${quiz.id}', ${quiz.created_by}, ${quiz.recipient}, '${quiz.name}');`);
};

let addNewQuestion = (question, quizId) => {
    return db.query(
        `INSERT INTO questions
            (id, quiz_id, question, correct_answer, incorrect1, incorrect2, incorrect3)
        VALUES
            ('${question.id}', '${quizId}', '${question.question}', '${question.answer}',
            '${question.incorrect1}', '${question.incorrect2}', '${question.incorrect3}');`);
};

exports.usernameLogin = usernameLogin;
exports.createUser = createUser;
exports.getUsers = getUsers;
exports.getQuizzesCreated = getQuizzesCreated;
exports.addNewQuiz = addNewQuiz;
exports.addNewQuestion = addNewQuestion;
