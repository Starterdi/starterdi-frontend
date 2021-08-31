const express =  require('express');
const app = express();
// const bodyParser = require('body-parser');
const port = 3030;
const cors = require('cors');
// const route = require('./routes/index');
const db = require('./config/db');

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use (express.json());
