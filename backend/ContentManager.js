const fs = require('fs');
const url = require('url');
const path = require("path");

const contentDir = __dirname + "/content";

async function getDefaultContentJson(lang) {
    let jsonUrl = contentDir + `/content_${lang}_0.json`;
    let data = fs.readFileSync(jsonUrl, 'utf8');

    return JSON.parse(data);;
}
async function getAllContent(lang) {
    return fs
		.readdirSync(contentDir)
		.filter((name) => path.extname(name) === ".json" && name.includes(`_${lang}`) && !name.includes("_0"))
		.map((name) => require(path.join(contentDir, name)));
}

async function setContentJson(file, fileName) {
    let data = JSON.stringify(file)
    let success = await fs.writeFileSync(fileName, data);
    return true;
}

exports.content = async function(req, res) {    
    let parsedUrl = url.parse(req.url, true);
    let lang = parsedUrl.query.lang || 'en';

    let temp = await getDefaultContentJson(lang);

    res.send(temp)
}
exports.getAllVariants = async function (req, res) {
    let parsedUrl = url.parse(req.url, true);
    let lang = parsedUrl.query.lang || "en";
    
    let temp = await getAllContent(lang);

    res.send(temp);
}

exports.editContentVariant = async (req, res) => {
    let parsedUrl = url.parse(req.url, true);
	let lang = parsedUrl.query.lang;
    let variant = parsedUrl.query.variant;
	// let parsedUrl = url.parse(req.url, true);
	// let lang = parsedUrl.query.lang;
    
	if (!lang || !variant) {
        res.send("No language or variant Sent");
		return;
	}
    
	// let url = __dirname + `/content/content_${lang}.json`;
	let fileLocation = contentDir + `/content_${lang}_${variant}.json`;
    
	let temp = await setContentJson(req.body, fileLocation);
	res.send(temp);
}


exports.editContent = async function (req, res) {
    
    let parsedUrl = url.parse(req.url, true);
    let lang = parsedUrl.query.lang;

    if (!lang) {
        res.send("No language Sent");
        return;
    }

    // let url = __dirname + `/content/content_${lang}.json`;
    let urlFile = contentDir + `/content_${lang}_0.json`;

    let temp = await setContentJson(req.body, urlFile);
    res.send(temp);
};
