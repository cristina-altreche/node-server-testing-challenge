const express = require('express')
const charactersRouter = require('../characters/characters-router')

const server = express()

server.use(express.json())
server.use('/api/characters', charactersRouter)

server.get('/', (req, res) => {
    res.send('<h2>Server is running from server.js</h2>')
})

module.exports = server