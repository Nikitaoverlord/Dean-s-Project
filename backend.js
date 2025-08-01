const fs = require('fs')

//const Fuse = require('fuse.js')

const express = require("express")
const app = express()

// socket.io setup
const http = require("http")
const server = http.createServer(app)
const { Server } = require('socket.io')
const { profile } = require('console')
const io = new Server(server, { pingInterval: 2000, pingTimeout: 5000 })

const port = 3009

app.use(express.static('public'))

const users = {} // a dictionary of objects with each key being the socket.id
// // var accountInfo = JSON.parse(fs.readFileSync(__dirname + '/public/data/accounts.json'))
// eventsData = JSON.parse(fs.readFileSync(__dirname + '/public/data/events.JSON'))

app.get(['/', '/home'], (req, res) => {
    res.sendFile(__dirname + '/public/html/home.html')
})

io.on('connection', (socket) => {
    console.log('a user connected')
    users[socket.id] = {}

    socket.on('disconnect', (reason) => {
        console.log(reason)
        delete users[socket.id]
    })
})


setInterval(() => {
    // updating data
    // fs.writeFileSync(__dirname + '/public/data/events.json', JSON.stringify(eventsData))
    ////////////////
}, 15)

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
  
console.log('server did load')