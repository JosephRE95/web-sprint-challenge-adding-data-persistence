const express = require("express")

const carsRouter = require('./cars/cars-router') //this is a example do not use

const server = express()
server.use(express.json()); // if you dont have this, your screwed


server.use('/api/cars', carsRouter)  //this is a example do not use

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
