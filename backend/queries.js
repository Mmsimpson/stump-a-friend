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
    return db.query('SELECT id, username FROM users');
};

let getQuizzesCreated = (userId) => {
    return db.query(`SELECT * FROM quizzes WHERE quizzes.created_by = ${userId};`);
};

exports.usernameLogin = usernameLogin;
exports.createUser = createUser;
exports.getUsers = getUsers;
exports.getQuizzesCreated = getQuizzesCreated;
