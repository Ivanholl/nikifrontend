'use strict';

// const app = require('../index.js')
const fs = require('fs');
const url = require('url')

async function getContentJson(lang) {
    let jsonUrl = __dirname + `/content/content_${lang}.json`
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


// module.exports = function(app){
//     console.log('content manager')
//     app.get('/content?lang=en', async function(req, res){
//         let parsedUrl = url.parse(req.url);
//         console.log(parsedUrl) 
//         let temp = await getContentJson('en')
//         res.send(temp)
//     });

//     app.post('/contentFistPage', async function(req, res){
//         console.log(req.body);
//         let url = __dirname + `/content_en.json`;
//         let temp = await setContentJson(req.body, url)
//         res.send(temp)
//     });    
// }

exports.content = async function(req, res) {    
    let parsedUrl = url.parse(req.url, true);
    let lang = parsedUrl.query.lang || 'en'
    let temp = await getContentJson(lang)
    res.send(temp)
}
exports.editContent = async function (req, res) {
    console.log(req.body);
    let lang = req.body.lang;

    if (!lang) { res.send("No language Sent"); return };

    let url = __dirname + `/content/content_${lang}.json`;
    let temp = await setContentJson(req.body, url)
    res.send(temp)
}
