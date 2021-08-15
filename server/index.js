const express = require('express');
const path = require('path');
const cors = require('cors');

const HOST = 'localhost';
const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/public')));

app.listen(PORT, HOST, () => console.log('Client available on http://localhost:3000'));
