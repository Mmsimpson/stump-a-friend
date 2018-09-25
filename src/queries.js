const pg = require('pg-promise')();
const db = pg('postgres://marshallsimpson@localhost:5432/stump') 

let usernameLogin = (username, password) => {
    return db.one(`select username, password, id
    FROM users
    WHERE username = '` + username + `'
    AND password = '` + password + `';`)
}

let checkUser = (username) => {
    return db.query(`select username
        FROM users
        WHERE username = '` + username + `';`);
}

let createUser = (userForm) => {            
    return db.one(`INSERT INTO users (username, password, email) values    
    ('` + userForm.username + `', '` + userForm.password + `', '` + userForm.email + `')
    RETURNING *;`);  
} 

exports.usernameLogin = usernameLogin;
exports.createUser = createUser;
exports.checkUser = checkUser;
