const express = require('express');

const app = express();
const PORT = 3000;

// Endpoint 1
app.get('/hello', (req, res) => {
  res.send('Hello World');
});

// Endpoint 2
app.get('/dude', (req, res) => {
  res.send('Hello Dude');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
