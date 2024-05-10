const express = require("express")

const resourcesRouter = require('./resource/router'); //this is a example do not use
const projectsRouter = require('./project/router');
const tasksRouter = require('./task/router');


const server = express()
server.use(express.json()); // if you dont have this, your screwed


server.use('/api/resources', resourcesRouter);
server.use('/api/projects', projectsRouter);
server.use('/api/tasks', tasksRouter);  //this is a example do not use

server.use('*', (req, res, next) =>{
 next({ status: 404, message: 'not found'})
})


server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})

server.use(express.json())
module.exports = server
