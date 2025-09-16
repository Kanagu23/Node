// const path = require("path")
// console.log(path.basename("/users/admin/docs/file.txt")); 
// console.log(path.dirname("/users/admin/file.txt")); 
// console.log(path.extname("index.js")); 
// console.log(path.join("/users", "docs")); 
// console.log(path.resolve("docs", "file.txt")); 
// console.log(path.normalize("/users/admin//docs//file.txt"));
// console.log(path)

const fs = require("fs");
const path = require("path");
// console.log(__dirname)
// const filePath = path.join(__dirname, "files", "example.txt");
// console.log(filePath)
// fs.mkdirSync(path.dirname(filePath), { recursive: true });
// fs.writeFileSync(filePath, "Hello, Node.js with path + fs!");

// READ

// const filePath = path.join(__dirname, "files", "example.txt");

// // Synchronous read
// const data = fs.readFileSync(filePath, "utf-8");
// console.log("Sync read:", data);

// // Asynchronous read
// fs.readFile(filePath, "utf-8", (err, content) => {
//   if (err) throw err;
//   console.log("Async read:", content);
// });


const dirPath = path.join(__dirname, "files");

// Ensure directory exists
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// Read directory contents
fs.readdir(dirPath, (err, files) => {
  if (err) throw err;
  files.forEach(file => {
    console.log("Found file:", path.join(dirPath, file));
  });
});


