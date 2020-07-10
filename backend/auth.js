const jwt = require("jsonwebtoken");
const config = require("dotenv").config();

exports.login = async function (req, res) {
    const userToCheck = config && config.parsed && config.parsed.loginuser;
    const passToCheck = config && config.parsed && config.parsed.loginpass;
       
    if(!userToCheck || !passToCheck) {
        res.status(403).send("No Creadentials Set Up");
        return
    } 

    if (!req.body || !req.body.user || !req.body.pass || req.body.user !== userToCheck || req.body.pass !== passToCheck) {  
        res.status(403).send('invalid credentials')
        return
    } 
		// res.send(true);

    const payload = {
        user: req.body.user,
        pass: req.body.pass,
    };
    
    jwt.sign(payload, "secret", { expiresIn: 3600 }, (err, token) => {
		if (err) throw err;

		res.status(200).json({
			token,
		});
	});
};

exports.checkToken = (req, res, next) => {
    const token = req.header('token');
    if (!token) return res.status(401).json({ message: "Auth Error" });

    try {
        const decoded = jwt.verify(token, "secret");
        req.user = decoded.user;
        next();
    } catch (e) {
        console.error(e);
        res.status(500).send({ message: "Invalid Token" });
    }
}

exports.me = (req, res) => {
    res.send(true);
}