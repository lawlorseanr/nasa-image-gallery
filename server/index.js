const express = require('express');
const path = require('path');

const HOST = 'localhost';
const PORT = 3000;

const app = express();
app.use(express.static(path.join(__dirname, '../client/public')));

app.listen(PORT, HOST, () => console.log('Client available on http://localhost:3000'));
