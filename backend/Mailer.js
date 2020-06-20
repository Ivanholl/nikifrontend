const nodemailer = require("nodemailer");

const { mailConfig } = require('../conf');

let transport;
let initiated = false;
const init = async () => {
    let testAccount = await nodemailer.createTestAccount();

    transport = nodemailer.createTransport(mailConfig(testAccount));

    transport.verify((err, success) => {
        if (err) console.error(err);
        console.log('Your SMTP config is correct');
        initiated = true;
    });
}
init().catch(console.error);

const SendMail = async (mail) => {
    if (!initiated) return {pass: false, msg: 'Not loaded'};
    if (!mail.to) return { pass: false, msg: "No recipient"};

    mail = formatMail(mail)

    let info = await transport.sendMail(mail).catch(console.error);
       
    if (!info.messageId) return { pass: false, msg: 'Not sent'};

    console.log("Message sent: %s", info.messageId);
    console.log(info.envelope);
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    return { pass: true , msg: `Mail sent from ${info.envelope.from} to ${info.envelope.to}`};
}
const formatMail = mail => {
    return {
        from : mail.from || "Nodemailer",
        to : mail.to || "",
        subject : mail.subject || "",
        text : mail.text || "",
        html : mail.html || ""
    }
}


module.exports = {
    SendMail,
}

// let testMail = {
//     from: '"Fred Foo 👻" <foo@example.com>', // sender address
//     to: "ivan.jelev@abv.bg, baz@example.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
// }
// setTimeout(() => SendMail(testMail), 1500)


