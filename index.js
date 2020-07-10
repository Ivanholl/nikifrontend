const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const cors = require("cors");

const Mailer = require('./backend/Mailer');
const ContentManager = require('./backend/ContentManager');
const auth = require("./backend/auth");
const conf = require('./conf.js');

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
app.get('/getLanguages', (req, res) => {
    res.send(conf.languages);
});

app.get("/content", ContentManager.content);
app.get("/getAllVariants", auth.checkToken, ContentManager.getAllVariants);
app.post("/editContent", auth.checkToken, ContentManager.editContent);
app.post("/editContentVariant", auth.checkToken,  ContentManager.editContentVariant);
app.post("/login", auth.login);
app.get("/me", auth.checkToken, auth.me);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/build', 'index.html'));
});
app.get("/secretLogin", (req, res) => {
	res.sendFile(path.join(__dirname, "/build", "index.html"));
});

app.listen(port);

console.log('App listening on port ' + port)
