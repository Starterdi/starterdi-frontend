const express =  require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3001;
const cors = require('cors');
// const route = require('./routes/index');

app.use(bodyParser.unlencoded({extended: false}));
app.use(cors());
app.use (bodyParser.json());

app.post('/text', (req, res)=> {
    const text = req.body.name;
    console.log(text);
})

app.listen(port, ()=> {
    console.log(`express is running on ${port}`);
})