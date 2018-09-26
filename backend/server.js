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
    console.log(req.body)
    dbq.createUser(req.body.username, req.body.password, req.body.email)  
        // .then(data => {
        //     let token = jwt.sign({id: data.id},
        //         JwtPassword,
        //         {expiresIn: '7d'});
        //     res.send({ token });
        //})
        .catch(err => {
            console.log(err);
            res.send({ error: err });
        });
    };
        
let userLogin = (req, res) => {
    dbq.usernameLogin(req.body.username, req.body.password)
        .then(data => {
            res.send(data);

        }).catch(error=> res.send({response: "bad login"}));
};

ex.post('/login', userLogin);
ex.post('/signup', newUser);

ex.listen(3000);