const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
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

app.get('/algorithmAES', function (req, res) {
    res.render("algorithmAES");
})

app.get('/algorithmDES', function (req, res) {
    res.render("algorithmDES");
})
// app.post('/algorithmDES', function (req, res) {
//     const data = req.body.dulieu;
//     var crypto = require('crypto'); // gọi thư viện crypto
//     let key = Buffer.from('jhsgatt12sgsssqswhwqfsaxasxuasxs', 'base64'); // tạo key với 32 kí tự
//     const cipher = crypto.createCipheriv("des-ede3", key, null); // des-ede3: kiểu mã hóa
//     let encryptedData = cipher.update(data, 'utf-8', 'base64');
//     encryptedData += cipher.final('base64');
//     res.render('/algorithmDES', { mahoa: encryptedData });
// })

app.get('/algorithmRSA', function (req, res) {
    res.render("algorithmRSA");
})

app.listen(post, () => {
    console.log(`Listening on port ${post}`);
});