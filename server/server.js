const express =  require('express');
const app = express();
// const bodyParser = require('body-parser');
const port = 2020;
const cors = require('cors');
// const route = require('./routes/index');

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use (express.json());

app.listen(port, ()=> {
    console.log(`express is running on ${port}`);
});
