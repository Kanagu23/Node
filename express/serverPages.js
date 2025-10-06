const express = require('express');
const path = require('path');
const app = express();

// app.use(express.static(path.join(__dirname, 'public')));


// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});


const PORT = 4000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
