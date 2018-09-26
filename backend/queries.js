const pg = require('pg-promise')();
const db = pg('postgres://marshallsimpson@localhost:5432/stump'); 

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

exports.usernameLogin = usernameLogin;
exports.createUser = createUser;

