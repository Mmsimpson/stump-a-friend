const jwt = require('jsonwebtoken');
const express = require('express');
const ex = express();
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const cors = require('cors');
const dbq = require('./queries.js');
ex.use(cors());
ex.use(express.static('./frontend'));
ex.use(jsonParser);




