'use strict';
const express = require('express');
const app = express();
const port = 3000;

app.get('/cat', (req, res) => {
  res.send('From this endpoint you can get cats.')
});

// POST method route
app.post('/cat', (req, res) => {
  res.send('With this endpoint you can add cats.')
});

// PUT method route
app.put('/cat', (req, res) => {
  res.send('With this endpoint you can edit cats.')
});

// DELETE method route
app.delete('/cat', (req, res) => {
  res.send('With this endpoint you can delete cats.')
});

app.get('/cat/:id', function (req, res) {
  res.send(req.params)
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

