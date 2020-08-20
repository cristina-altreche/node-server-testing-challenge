const express = require('express')
// const charactersRouter = require('')

const server = express()

server.use(express.json())
// server.use('/api/characters')

server.get('/', (req, res) => {
    res.send('<h2>Server is running from server.js</h2>')
})

module.exports = server