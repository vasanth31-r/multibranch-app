const express = require('express');
const { add } = require('./math');

const app = express();
const PORT = 6666;

app.get('/', (req, res) => {
  res.send(`Hello from branch ${process.env.BRANCH_NAME}!`);
});

app.get('/add/:a/:b', (req, res) => {
  const result = add(parseInt(req.params.a), parseInt(req.params.b));
  res.send(`Result: ${result}`);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
