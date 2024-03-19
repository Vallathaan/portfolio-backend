const express = require('express');
const app = express();
const routes = require('./userRoutes/userRoutes')
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
 app.use('/api',routes);
 

module.exports = app;