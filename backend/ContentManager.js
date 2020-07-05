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

exports.content = async function(req, res) {    
    let parsedUrl = url.parse(req.url, true);
    let lang = parsedUrl.query.lang || 'en';

    let temp = await getContentJson(lang);

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
