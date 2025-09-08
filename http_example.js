// const http = require('http');
// const url = require ('url')
// const querystring = require('querystring');
// const server = http.createServer((req, res) => {
//   // Get the URL and HTTP method
//   const { url:requestUrl, method } = req; // destructing
//   const parsedUrl=url.parse(requestUrl,true)
//   console.log(querystring.stringify({ name: '"parithi"', age: 'one piece @3$' }))
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end(`You made a ${method} request to ${url}`);
// });

// server.listen(3000, () => {
//   console.log('Server running at http://localhost:3000/');
// });

// // http://localhost:3000/?name="parithi"&age="23"



const http = require('http');
const { URL } = require('url');

// In-memory data store (for demonstration)
let todos = [
  { id: 1, task: 'Learn Node.js', completed: false },
  { id: 2, task: 'Build an API', completed: false }
];

const server = http.createServer((req, res) => {
  const { method, url } = req;
  const parsedUrl = new URL(url, `http://${req.headers.host}`);
  const pathname = parsedUrl.pathname;

  // Set CORS headers (for development)
//   res.setHeader('Access-Control-Allow-Origin', ' http://www.google.com');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
//   if (method === 'OPTIONS') {
//     res.writeHead(204);
//     res.end();
//     return;
//   }

  // Route: GET /todos
  if (method === 'GET' && pathname === '/todos') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(todos));
  }
  // Route: POST /todos
  else if (method === 'POST' && pathname === '/todos') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      try {
        const newTodo = JSON.parse(body);
        newTodo.id = todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1;
        todos.push(newTodo);
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(todos));
      } catch (error) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid JSON' }));
      }
    });
  }

  // Route: PUT /todos/:id
  else if (method === 'PUT' && pathname.startsWith('/todos/')) {
    console.log("ARRAY",pathname.split('/')[2])
    const id = parseInt(pathname.split('/')[2]);
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      try {
        const updatedTodo = JSON.parse(body);
        const index = todos.findIndex(t => t.id === id);

        if (index === -1) {
          res.writeHead(404, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Todo not found' }));
        } else {
          todos[index] = { ...todos[index], ...updatedTodo };
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(todos[index]));
        }
      } catch (error) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid JSON' }));
      }
    });
  }

  // Route: DELETE /todos/:id
  else if (method === 'DELETE' && pathname.startsWith('/todos/')) {
    const id = parseInt(pathname.split('/')[2]);
      console.log("ARRAY",pathname.split('/')[2])
    const index = todos.findIndex(t => t.id === id);

    if (index === -1) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Todo not found' }));
    } else {
      todos = todos.filter(t => t.id !== id);
      res.writeHead(204);
      res.end();
    }
  }

  // 404 Not Found
  else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});