const jwt = require('jsonwebtoken');
const express = require('express');
const ex = express();
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const cors = require('cors');
const dbq = require('./queries.js');
ex.use(cors());
ex.use(jsonParser);

let newUser = (req, res) => {
    let userform = req.body;
    let userNameTaken = {response: "Username Taken"};
    dbq.checkUser(userForm.username)
        .then(results => {
            if(results === undefined || results.length == 0) {
                dbq.createUser(userForm)
                    .then(results => {
                        res.send(results);
                    })
            } else {
                res.send(userNameTaken);
            }
        })
}

let validateToken = (req, res) => {
    let responseObject = {response: null,
                            payload: null}
    let token = req.body.webtoken
    let isValid;
    let payload;
    try {
        let decoded = jwt.verify(token, priv.signature, {"alg": "HS256", "typ": "JWT"});
        isValid = true;
        req.user = decoded.payload;
        responseObject.payload = payload;
    } catch (err) {
        isValid = false;
    }
    //creates a new property for the request object, called user
    if (isValid) {
        responseObject.response = "Logged in";
        res.send(responseObject);
    } else {
        responseObject.response = "Invalid login";
        res.send(responseObject);
    }
}


let createToken = (req, res) => {
    let credentials = req.body;
    console.log(req.body);
    // let password = credentials.password;
    // let id = credentials.id;
    // let username = credentials.username;
    // console.log(credentials);

    // dbq.usernameLogin(username, password)
    //     .then(results => {
    //         console.log(results);
    //         if (results.password === password && results.username === username) {
    //             console.log("im here");
    //             let token = jwt.sign(
    //                 {name: results.username,
    //                 userid: results.id},
    //                 priv.signature,
    //                 {expiresIn: '7d'})
    //                 console.log(token);
    //                 res.end(JSON.stringify(token));
    //         } else {
    //             res.end("Sorry, invalid login");
    //         }
    //     }).catch(error=> res.send({response: "bad login"}));
    };


ex.post('/checktoken', validateToken);
ex.post('/login', createToken);
ex.post('/register', newUser);

ex.listen(3000);