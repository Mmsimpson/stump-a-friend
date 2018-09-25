const pg = require('pg-promise')();
const db = pg('postgres://marshallsimpson@localhost:5432/stump') 

let usernameLogin = (username, password) => {
    return db.one(`select username, password, id
    FROM users
    WHERE username = '` + username + `'
    AND password = '` + password + `';`)
}

exports.usernameLogin = usernameLogin;


