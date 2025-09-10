// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(404, { "Content-Type": "text/plain-text" });
//   res.end("Not found");
// });

// server.listen(3000, () => {
//   console.log("Server running at http://localhost:3000/");
// });

// const http = require("http");

// const server = http.createServer((req, res) => {
//   // console.log(req)
//   try {
//     if (req.url === "/") {
//       res.end("Welcome to Home Page");
//     } else if (req.url === "/about") {
//       res.end("About Us Page");
//     } else if (req.url === "/json") {
//       res.end(
//         JSON.stringify({ name: "Node.js", type: "Runtime", version: "18.x" })
//       );
//     } else {
//       res.writeHead(404);
//       res.end("Page Not Found");
//     }
//   } catch (err) {
//     res.writeHead(500);
//     res.end("server error");
//   }
// });

// server.listen(3000, () => console.log("Server running on port 3000"));

// const http = require('http');
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.end(JSON.stringify({ name: 'Node.js', type: 'Runtime', version: '18.x' }));
// });

// server.listen(3000, () => console.log('Server running on port 3000'));


// const http = require('http');

// http.get('http://jsonplaceholder.typicode.com/posts/1', (res) => {
//   let data = '';
//   res.on('data', chunk=>{
//     // console.log(chunk)
//     data+=chunk
//   });
//   res.on('end', () => {
//     console.log('Response:', data);
//   });
// }).on('error', (err) => {
//   console.error('Error:', err.message);
// });

// const fs = require("fs");
// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/video") {
//     const stream = fs.createReadStream("video.mp4");
//     res.writeHead(200, { "Content-Type": "video/mp4" });
//     stream.pipe(res); // Efficient streaming
//   } else {
//     res.end("Hello");
//   }
// });

// server.listen(3000, () => {
//   console.log("Server running at http://localhost:3000");
// });

// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/api/data") {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify({ message: "Hello from server" }));
//   } else {
//     res.writeHead(404);
//     res.end("Not Found");
//   }
// });

// server.listen(5000, () => {
//   console.log("Server running at http://localhost:5000");
// });

// working-server.js
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/api/data") {
    // ✅ Add CORS headers
    res.writeHead(200, {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",   // allow all origins
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    });

    res.end(JSON.stringify({ message: "Hello from server with CORS enabled 🚀" }));
  } 
  else if (req.method === "OPTIONS") {
    // ✅ Handle preflight requests
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    });
    res.end();
  }
  else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

server.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
