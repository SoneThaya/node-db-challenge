const express = require('express');

const ProjectRouter = require('./projects/project-router');

const server = express();

server.use(express.json());

server.use('/api', ProjectRouter);

server.get("/", (req, res) => {
    res.status(200).json({ api: "up" });
});

module.exports = server;