const fs = require("fs");
const {Duplex} = require ("stream")
const readable= fs.createReadStream("./files/example.txt",{encoding:"utf-8"})
readable.on("data",chunk=>{
    console.log(chunk)
})

const writable= fs.createWriteStream("./files/output.txt")
writable.write("Hi Parithi")
writable.write("Hi Parithi1 \n")
writable.write("Hi Parithi 2 \n")
writable.write("Hi Parithi 3 \n")
writable.write("Hi Parithi 4 \n")
writable.end("Hello Kanagu")

const duplex=new Duplex({
    read(size){
        this.push("Hello node ! from duplex")
        this.push(null)
    },
    write(chunk,encoding,callback){
        console.log(chunk.toString())
        callback()
    }
})

duplex.on('data',chunk=>{
    console.log("dup",chunk)
})
duplex.write("hello from write duplex")