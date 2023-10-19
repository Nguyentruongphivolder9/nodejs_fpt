const { log } = require('console');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const nodemailer = require('nodemailer');
const app = express();
var ip = require('ip');
const post = 3000;

app.use(express.urlencoded({ extended: true, }),);
app.use(express.json());

app.use(express.static("public"));
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set("views", "./views");

app.get('/', function (req, res) {
    res.render('home');
})

app.get('/ip', function (req, res) {
    const address = ip.address();
    res.send(address);
})

app.get('/algorithmAES', function (req, res) {
    res.render("algorithmAES");
})

app.get('/algorithmDES', function (req, res) {
    res.render("algorithmDES");
})
app.post('/algorithmDES', function (req, res) {
    const data = req.body.dulieu;
    var crypto = require('crypto'); // gọi thư viện crypto
    let key = Buffer.from('jhsgatt12sgsssqswhwqfsaxasxuasxs', 'base64'); // tạo key với 32 kí tự
    const cipher = crypto.createCipheriv("des-ede3", key, null); // des-ede3: kiểu mã hóa
    let encryptedData = cipher.update(data, 'utf-8', 'base64');
    encryptedData += cipher.final('base64');
    res.render('/algorithmDES', { mahoa: "" });
})

app.get('/algorithmRSA', function (req, res) {
    res.render("algorithmRSA");
})

app.get('/email', function (req, res) {
    res.render("partials/email");
})

app.post('/post-email', function (req, res) {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'nonameok2010@gmail.com',
            pass: 'gmhb uqea cymg hovo'
        }
    });

    var mailOptions = {
        from: req.body.emailSender,
        to: req.body.emailReceiver,
        subject: req.body.topic,
        text: req.body.description,
        // html: ,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    res.send("oke");
})

app.listen(post, () => {
    console.log(`Listening on port ${post}`);
});