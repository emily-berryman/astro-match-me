const express = require('express')
const path = require('path')

const profileRoutes = require('./routes/profiles')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/profiles', profileRoutes)

server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
  })

module.exports = server
