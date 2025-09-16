// const EventEmitter = require("events");

// const myEmitter = new EventEmitter()
// // console.log(myEmitter)

// myEmitter.on('welcome',(name)=>{
// console.log(name)
// })

// myEmitter.emit('welcome','Parithi')


const http =require('http')

const server = http.createServer()
server.on('request',(req,res)=>{
    res.writeHead(200,{"content-type":"text/plain"})
    res.end("Hello Parithi")
})
server.listen(3000)
