const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var hackerSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
    },
    profileLink: {
        type: String,
    },
    location: {
        type: String,
    },
    education: {
        type: String,
    },
    challengesSolved: {
        type: Number,
    },
    solutionsSubmitted: {
        type: Number,
    },
    overallRank: {
        type: Number,
    },
    followers: {
        type: Number,
    },
    following: {
        type: Number,
    },
    competitivePercentile: {
        dataStructures: {
            type: Number,
        },
        algorithms: {
            type: Number,
        },
        cpp: {
            type: Number,
        },
        java: {
            type: Number,
        },
        python: {
            type: Number,
        },
        html: {
            type: Number,
        },
        javascript: {
            type: Number,
        },
    },
    votes: {
        type: Number,
    },
    timestamp: {
        type: Number,
    },
    deviceType: {
        type: String,
    },
});

var Hackers = mongoose.model('hackers', hackerSchema);

module.exports = Hackers;