const pg = require('pg-promise')();
const db = pg('postgres://marshallsimpson@localhost:5432/stump') 

let usernameLogin = (username, password) => {
    return db.one(`select username, password, id
    FROM users
    WHERE username = '` + username + `'
    AND password = '` + password + `';`)
}

// let listAllQuizzes = (sent_to) => {
//     return db.query(`select usr.id, qzs.created_by, qts.question, qts.quiz
//     FROM quizzes qzs
//     WHERE sent_to =  '` + sent_to + `';`)
// }

exports.usernameLogin = usernameLogin;
// exports.listAllQuizzes = listAllQuizzes;

