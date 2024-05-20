const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello, World! This is my containerized Express app.');
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});