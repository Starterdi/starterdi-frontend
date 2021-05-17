const express =  require('express');
const app = express();
// const bodyParser = require('body-parser');
// console.log
const port = 3001;
const cors = require('cors');
// const route = require('./routes/index');

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use (express.json());

app.post('/text', (req, res)=> {
    const text = req.body.name;
    console.log(req);
    console.log(text);
})

app.listen(port, ()=> {
    console.log(`express is running on ${port}`);
})