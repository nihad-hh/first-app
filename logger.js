// every file converted to function in the back - module wrapper function
// code is not executed directly
// console.log(__filename)
// console.log(__dirname)

const EventEmitter = require('node:events') // class
//const emitter = new EventEmitter() // object

var url = 'http://mylogger.io/log'

class Logger extends EventEmitter{

    log(message) {
        //send an HTTP request
        console.log(message)
        this.emit('messageLogged', {id: 1, url:'https://'})
    }
    
}

//module.exports.log = log;
module.exports = Logger

//module.exports.endPoint = url;
