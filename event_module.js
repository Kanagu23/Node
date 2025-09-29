// const EventEmitter = require("events");

// const myEmitter = new EventEmitter()
// // console.log(myEmitter)

// myEmitter.on('welcome',(name)=>{
// console.log(name)
// })

// myEmitter.emit('welcome','Parithi')


const { Transform } = require('stream');

const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

process.stdin.pipe(upperCaseTransform).pipe(process.stdout);
