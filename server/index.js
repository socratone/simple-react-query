const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const { users } = require('./data');

const port = 3001;

app.get('/users', (req, res) => {
  res.send(users);
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => String(user.id) === id);
  res.send(user);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
