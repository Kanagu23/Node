const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

let todos = ['Buy milk', 'Finish homework'];

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Homepage – show list
app.get('/', (req, res) => {
  res.render('index', { title: 'My To-Do List', todos });
});

// Add item page
app.get('/add', (req, res) => {
  res.render('add', { title: 'Add a Task' });
});

// Handle form submission
app.post('/add', (req, res) => {
  const newTask = req.body.task;
  if (newTask) todos.push(newTask);
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
