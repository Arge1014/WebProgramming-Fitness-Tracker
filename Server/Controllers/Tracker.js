const express = require('express');
const users = require("../models/Users");
const app = express.Router();

const tracker = {
    users: []
}

app.post('/join', (req, res) => {
    const userId = req.query.userId
    tracker.users.push(users[userId]);
    res.send(users[userId])
});

module.export = app;