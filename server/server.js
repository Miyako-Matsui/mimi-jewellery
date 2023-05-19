const path = require('path')
const express = require('express')

const itemsRoutes = require('./routes/items')

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/items', itemsRoutes)

module.exports = server
