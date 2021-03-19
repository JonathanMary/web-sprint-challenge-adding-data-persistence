// build your server here and require it from index.js
const express = require('express')
// Routers
const ResourcesRouter = require('./resource/router')
const ProjectRouter = require('./project/router')
const TasksRouter = require('./task/router')

const server = express()

server.use(express.json())

server.use('/api/resources', ResourcesRouter);
server.use('/api/projects', ProjectRouter)
server.use('/api/tasks', TasksRouter)

server.use('/', (req, res) => {
    res.send('API Works')
})
module.exports = server;