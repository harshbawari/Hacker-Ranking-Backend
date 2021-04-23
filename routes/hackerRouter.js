const express = require('express');
const bodyParser = require('body-parser');
const Hackers = require('../models/hackers');

//Sort service
const sort_service = require('../services/sortHackers');



const hackerRouter = express.Router();

hackerRouter.use(bodyParser.json());

hackerRouter.route('/')
    .get((req, res, next) => {
        Hackers.find({})
            .then((hackers) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(sort_service.sort_hackers(hackers));
            }, (err) => next(err))
            .catch((err) => {
                console.log(err);
            });
    });

hackerRouter.route('/:hackerId')
    .get((req, res, next) => {
        Hackers.findOne({ id: req.params.hackerId })
            .then((hacker) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(hacker);
            }, err => next(err))
            .catch((err) => {
                console.log(err);
            });
    })



module.exports = hackerRouter;