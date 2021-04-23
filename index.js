const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const hackerRouter = require('./routes/hackerRouter');


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


server.listen(8000);