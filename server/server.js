const express =  require('express');
const app = express();
// const bodyParser = require('body-parser');
const port = 3001;
const cors = require('cors');
const api = require('./routes/index');
const conn = require('./config/db');

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use (express.json());
app.use('/api',api);

app.listen(port, ()=> {
    console.log(`express is running on ${port}`);
});