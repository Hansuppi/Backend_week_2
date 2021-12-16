'use strict';
const express = require('express');
const app = express();
const port = 3000;

app.get('/cat', (req, res) => {
  res.send('From this endpoint you can get cats.')
});

// POST method route
app.post('/cat', function (req, res) {
  res.send('POST request to the homepage')
});

// POST method route
app.put('/cat', function (req, res) {
  res.send('POST request to the homepage')
});

// POST method route
app.delete('/cat', function (req, res) {
  res.send('POST request to the homepage')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

