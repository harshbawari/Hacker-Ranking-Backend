const express = require('express');
const http = require('http');
const https = require('https');
const bodyParser = require('body-parser');
const hackerRouter = require('./routes/hackerRouter');
const cors = require('cors');

const port = process.env.PORT;


//Connect to database
const mongoose = require('mongoose');
const url = 'mongodb+srv://harshbawari:hacker-ranking2121@main.zaqtc.mongodb.net/hackerRanking?retryWrites=true&w=majority';
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log("Connected correctly to the server!");
}, (err) => {
    console.log("Error connecting to the server: ", err);
});

const hackerRanking = express();


//CORS Policy
hackerRanking.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
});

//hackerRanking.use(cors());

//Middlewares
hackerRanking.use(bodyParser.json());
hackerRanking.use(bodyParser.urlencoded({ extended: true}));


//API
hackerRanking.use('/hackers', hackerRouter);

hackerRanking.get('/', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end("Hacker Ranking API");
});


//Server
const server = http.createServer(hackerRanking);


server.listen(port);