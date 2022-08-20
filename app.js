// function sayHello(name) {
//     console.log('Hello ' + name)
// }

// console.log() // console is global object

// setTimeout()
// clearTimeout()

// setInterval()
// clearInterval()

// window.console.log
// window.setInterval()
// window.setTimeout()

// var message = ''
// console.log(global.message) // undefined

// global.setInterval()
// global.setTimeout()

// var sayHello = function() {

// }

// console.log(module)

// every file is a module, module is like an object in terms of OOP
//const log = require('./logger.js')
//const stops overriding
//console.log(logger)
//jshint app.js 

//logger.log('message')
//log('message')

// -- path module
// const path = require('node:path');

// var pathObj = path.parse(__filename)
// console.log(pathObj)

// -- os module
// const os = require('node:os');
// var totalMemory = os.totalmem()
// var freeMemory = os.freemem()

// console.log('Total Memory: ' + totalMemory)
// console.log('Free Memory: ': freeMemory)

// console.log(`Total Memory: ${totalMemory}`)
// console.log(`Free Memory: ${freeMemory}`)

// -- file system module
// const fs = require('node:fs');

// const files = fs.readdirSync('./')
// console.log(files)

// fs.readdir('./', function(err, files){
//     if (err) console.log('Error', err)
//     else console.log('Result', files)
// })

// -- events

// const EventEmitter = require('node:events') // class
// //const emitter = new EventEmitter() // object

// // register a listener

// // emitter.on('logging', (arg) => {
// //     console.log(arg)
// // })

// // raise an event
// // raise: logging (data: message)
// //emitter.emit('logging', {message: 'Hello there'})

// const Logger = require('./logger')
// const logger = new Logger()

// logger.on('messageLogged', (arg) => {
//     console.log('Listener called', arg)
// }) //add listener

// logger.log('message')

// -- HTTP

const http = require('http')

const server = http.createServer( (req, res) => {
    if (req.url === '/')  {
        res.write('Hello world')
        res.end()
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify( [1, 2, 3] ))
        res.end()
    }
})

server.on('conncection', (socket) => {
    console.log('New connection');
})

server.listen(3000)

console.log('Listening on port 3000...')