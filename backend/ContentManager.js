'use strict';

const app = require('../index.js')
const fs = require('fs');

async function getContentJson(lang) {
    var content;

    let jsonUrl = __dirname + `/content_${lang}.json`
    let data = fs.readFileSync(jsonUrl, 'utf8');

    return JSON.parse(data);;
}

async function setContentJson(file, fileName) {
    var data = JSON.stringify(file)
    // let jsonUrl = __dirname + `/content_${lang}.json`

    await fs.writeFileSync(fileName, data);

    return true;
    // return JSON.parse(data);
}


module.exports = function(app){

    app.get('/contentFistPage', async function(req, res){
        let temp = await getContentJson('en')
        res.send(temp)
    });

    app.post('/contentFistPage', async function(req, res){
        console.log(req.body);
        let url = __dirname + `/content_en.json`;
        let temp = await setContentJson(req.body, url)
        res.send(temp)
    });
}
