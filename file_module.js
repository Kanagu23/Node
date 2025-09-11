const fs=require("fs")
const http = require("http")
const fsPromises= require("fs/promises")
// fs.readFile("file_mod_example.txt","utf-8",(err,data)=>{
//     console.log(data)
// })
// console.log("ASYNC")
// const data = fs.readFileSync("file_mod_example.txt", "utf8");
// console.log(data)
// console.log("SYNC") 


// fs.writeFile("output.txt", "Hello parithi", (err) => {
//   if (err) throw err;
//   console.log("File written successfully");
// });
// fs.writeFileSync("output.txt", "Hello parithi");

// fs.appendFile("output.txt", "\n\"5th This is appended text.\"", (err) => {
//   if (err) throw err;
//   console.log("Data appended successfully");
// });

// fs.unlink("output.txt", (err) => {
//   if (err) throw err;
//   console.log("File deleted");
// });

// fs.rename("output.txt","result.txt",(err)=>{
//   if(err) throw err;
//   console.log("File renamed")
// })

// console.log(fs.existsSync("output.txt"))

// fs.readdir("FsModules",(err,files)=>{
//     console.log(files)
// })

// fs.rmdir("FsModules",(err)=>{   // Folder must be EMPTY
//   if (err) throw err
//     console.log("Folder deleted")
// })

// fs.rm("FsModules",{recursive:true},(err)=>{    // to delete all files in the folder
//   if (err) throw err
//     console.log("Folder deleted")
// })

// fs.watch("test.txt",(eventType,filename)=>{
//   console.log(eventType,filename)
// })

// try{

// }
// catch (err){
//   console.log(err)
// }

// fsPromises.readFile("file_mod_example1.txt","utf-8").then((data)=>{
// console.log(data)
// }).catch((err)=>{
//   console.log(err)
// })
// const readFile=async()=>{
// const data= await fsPromises.readFile("file_mod_example.txt","utf-8")
// console.log(data)
// }
// readFile()

// fs.readdir("../../D2", (err, files) => {  //absolute path
//   if (err) throw err;
//   console.log(files)
//   // console.log("Is file:", stats.isFile());
//   // console.log("Is directory:", stats.isDirectory());
//   // console.log("Size:", stats.size, "bytes");
// });


// const readStream = fs.createReadStream("video.mp4");
// readStream.on("data", (chunk) => {
//   console.log("Chunk:", chunk);
// });


const server = http.createServer((req, res) => {
  if (req.url === "/video") {
    const stream = fs.createReadStream("video.mp4");
    res.writeHead(200, { "Content-Type": "video/mp4" });
    stream.pipe(res); // Efficient streaming
  } else {
    res.end("Hello");
  }
});

server.listen(3000,()=>{
  console.log("server running @3000")
})