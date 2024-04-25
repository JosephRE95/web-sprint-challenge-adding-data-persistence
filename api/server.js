const express = require("express")

const server = express()

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
