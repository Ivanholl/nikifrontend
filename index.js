const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const cors = require("cors");

const Mailer = require('./backend/Mailer');
const ContentManager = require('./backend/ContentManager');

const app = express();
const port = process.env.PORT || 9000;


app.use(express.static(path.join(__dirname, '/build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(cors());


app.post('/sendContactUsMail', async (req, res) => {
    var {pass, msg} = await Mailer.SendMail(req.body)
    
    if(pass) {
        res.send({msg})
    } else {
        res.status(400).end({msg})
    }
});

app.get('/content', ContentManager.content );
app.post('/editContent', ContentManager.editContent);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/build', 'index.html'));
});
app.get("/secretLogin", (req, res) => {
	res.sendFile(path.join(__dirname, "/build", "index.html"));
});


app.listen(port);

console.log('App listening on port ' + port)
