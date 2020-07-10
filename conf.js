const config = require("dotenv").config();

const mailConfig = (testAccount) => {
    if (process.env.NODE_ENV === 'production') { // all emails are delivered to destination    
        return {
            host: 'smtp.sendgrid.net',
            port: 587,
            secure: false, //no SSL
            auth: {
                user: config.parsed.SMTPuser,
                pass: config.parsed.SMTPpass,
            }
        };
    } else { // all emails are catched by ethereal.email    
        return {
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false, //no SSL
            auth: {
                user: testAccount.user,
                pass: testAccount.pass
            }
        };
    }
};

const backend = process.env.NODE_ENV === "production" ? '' : 'localhost:9000';
const languages = ['en', 'bg', 'fr'];

module.exports = {
	mailConfig,
	backend,
	languages,
};