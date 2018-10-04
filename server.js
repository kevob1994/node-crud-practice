const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
let news = require('./routes/news');
const app = express();

mongoose.connect('mongodb://localhost:27017/novedades');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use('/', news);

const port = process.env.port || 4000;
app.listen(port, () => {
    console.log('Now listening for requests:');
});
