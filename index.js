const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const cors = require("cors");

const Mailer = require('./backend/Mailer');

const app = express();
const port = process.env.PORT || 9000;


app.use(express.static(path.join(__dirname, '/build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(cors());

const ContentManager = require('./backend/ContentManager')(app);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/build', 'index.html'));
});

app.post('/sendContactUsMail', async (req, res) => {
    var {pass, msg} = await Mailer.SendMail(req.body)

    if(pass) {
        res.send({msg})
    } else {
        res.status(400).end({msg})
    }
});

app.listen(port);

console.log('App listening on port ' + port)
