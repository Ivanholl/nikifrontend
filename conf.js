
const mailConfig = (testAccount) => {
    if (process.env.NODE_ENV === 'production') { // all emails are delivered to destination    
        return {
            host: 'smtp.sendgrid.net',
            port: 587,
            secure: false, //no SSL
            auth: {
                user: process.env.SMTP.user,
                pass: process.env.SMTP.pass
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