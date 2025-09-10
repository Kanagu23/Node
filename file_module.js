const fs=require("fs")
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


// fs.appendFile("output.txt", "\n\"5th This is appended text.\"", (err) => {
//   if (err) throw err;
//   console.log("Data appended successfully");
// });

fs.unlink("output.txt", (err) => {
  if (err) throw err;
  console.log("File deleted");
});


