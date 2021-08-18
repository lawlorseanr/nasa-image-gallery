const express = require('express');
const data = require('./data.json');

const app = express();
app.get('/search', (req, res) => res.status(200).json(data));
module.exports = app;
