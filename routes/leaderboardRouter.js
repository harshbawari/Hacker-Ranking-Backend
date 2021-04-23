const express = require('express');
const bodyParser = require('body-parser');
const Hackers = require('../models/hackers');

//Sort service
const sort_service = require('../services/sortHackers');
const sort_leaders = require('../services/sortLeaders');



const leaderboardRouter = express.Router();

leaderboardRouter.use(bodyParser.json());

leaderboardRouter.route('/')
    .get((req, res, next) => {
        Hackers.find({})
            .then((hackers) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(sort_leaders.sort_leaders(hackers));
            }, (err) => next(err))
            .catch((err) => {
                console.log(err);
            });
    });



module.exports = leaderboardRouter;