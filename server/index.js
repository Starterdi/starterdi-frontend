const express =  require('express');
const app = express();
// const bodyParser = require('body-parser');
const port = 3309;
const cors = require('cors');
// const route = require('./routes/index');
const conn = require('./config/db');

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use (express.json());

app.listen(port, ()=> {
    console.log(`express is running on ${port}`);
});