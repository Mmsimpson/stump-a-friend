const jwt = require('jsonwebtoken');
const express = require('express');
const ex = express();
const JwtPassword = 'jsonwebtokenPassword'
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const cors = require('cors');
const dbq = require('./queries.js');
ex.use(cors());
ex.use(jsonParser);

let newUser = (req, res) => {
    console.log(req.body)
    dbq.createUser(req.body.username, req.body.password, req.body.email)  
        .then(data => {
            res.send({ data });
        })
        .catch(err => {
            console.log(err);
            res.send({ error: err });
        });
    };
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
    let password = credentials.password;
    let id = credentials.id;
    let username = credentials.username;
    console.log(credentials);    

    dbq.usernameLogin(username, password, id)
        .then(data => {
            console.log(data)
            if (data.password === password && data.username === username) {
                console.log("im here");
                let token = jwt.sign(
                    {name: data.username,
                    id: data.id},
                    JwtPassword,
                    {expiresIn: '7d'})
                    console.log(token);
                    res.send({token: token, user:data});
            } else {
                res.send("Sorry, invalid login");
            }
        }).catch(error=> res.send({response: "bad login"}));
    };

let getUsers = (req, res) => {
    dbq.getUsers()
    .then(data => {
        res.send({ data });
    }).catch(err=> {
        res.send({error: err});
    })
};

let getQuizzesCreated = (req, res) => {
    dbq.getQuizzesCreated(req.params.id)
    .then(data => {
        res.send({ data });
    }).catch(err => {
        res.send({ error: err });
    })
};

let getRecievedQuizzes = (req, res) => {
    console.log(req.params.id)
    dbq.getRecievedQuizzes(req.params.id)
    .then(data => {
        res.send({data});
    }).catch(err => {
        res.send({error: err});
    })
}

let addNewQuiz = (req, res) => {
    dbq.addNewQuiz(req.body)
    .then(() => {
        req.body.questions.forEach(question => {
            dbq.addNewQuestion(question, req.body.id)
            .then(() => res.end())
        })
    })
};
      
ex.post('/checktoken', validateToken);
ex.post('/login', createToken);
ex.post('/signup', newUser);
ex.get('/users', getUsers);
ex.get('/users/:id/quizzes/created', getQuizzesCreated);
ex.get('/users/:id/quizzes/recieved', getRecievedQuizzes);
ex.post('/quizzes', addNewQuiz);

ex.listen(5000);