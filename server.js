console.log("Web serverni boshlash");
const express = require('express');
const app = express(); // express instance yani bu orqali biz express objectni ishlatamiz
const http = require('http'); // http bu bizning core modulimiz
const fs = require('fs');

let user;
fs.readFile("database/user.json","utf8",(err,data)=> {
    if (err) {
        console.log("ERROR")
    }else {
        user = JSON.parse(data);
    }
});
// 1 **KIRISH** expressga kirib kelgan codelar yoziladi
app.use(express.static("public")); // har qanday browserdan kirib kelayotgan zaproslar uchun public folder ochiq degani yani faqat public folderni clientlarga ochib beryapmiz
app.use(express.json()); // kirib kelyotgan json formatdagi datani obj holatga o'girib beradi, bu bizga kirib kelayotgan object formatdagi datani json formatga otkazib beradi
app.use(express.urlencoded({extended: true})); // buni yozmasak html formdan post qilingan malumotlarni express serverimiz ignore qiladi yani serverga kiritmaydi; HTML form post shaklida kevotgan requestlar qabul qivolamiza

// 2 **Session CODE** 
// (Bu yerda Session code yozilishi mumkin)

// 3 **VIEWS CODE** Backenda front end yasaymiz (VIEW yasaymiz)
// BSSR back-end-server-side renderring yo'nalishini tanladik
app.set("views", "views"); // yani views folderni ichidan o'qiydi
app.set("view engine", "ejs"); // view engine ejs ligini ko'rsatib beryabmiz, ejs orqali back endni ichida front end yasaymiz

// 4 **Router'larga** mo'ljallangan
/* 
app.get("/hello", function(req, res){
    res.end(`<h1 style="background: orange">HELLO MIT</h1>`);
});

app.get("/gift", function(req, res){
    res.end(`<h1 style="background: green">GIFT PAGE</h1>`);
});
*/
/*
get bizga malumotni olihs uchun get ishlatilinadi 
post esa ozi bilan malum bir malumotni olib keladi va  databasega yozadi

HTTP 3 qismdan iborat (starter line) (headers) (request body =biz yozgan malumotni u body sectionga olib qo'yadi)

*/




app.post('/create-item' , (req,res) => {
 console.log(req.body);
 res.json({test:"success"})
});

app.get('/author', (req,res) => {
    res.render('author', { user:user});
})

app.get('/',function(req, res) {
    res.render('reja');
})

// serverni yaratamiz va unga app ni yuklaymiz
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running successfully on port: ${PORT},  https://localhost:${PORT}`);
});

// git reset --hard oxirgi versidagi push qilingan codega olib boradi
// express orqali web server qurib oldik.
// front end'ni qurish 2 usuli bor: 1) Backend'da front qurib olish BSSR using EJS 2) React - single page rendering

// git clean -df oxirgi ruchnoy kiritgan narsalarni udalit qiladi
// git pull origin master orqali eng oxirgi source ni yuklab olamiz
// git ni bitta orqaga qaytarish uchun
// git reset --hard desak eng oxirgi deploy qilingan holga qaytaradi kodni
// get bizga malumotni data base dan olish uchun ishlatilinadi 
// post esa malumotni ozi bilan olib keladi va data base ga malum bir malumotni yozadi

// secure socket layer bolmagani uchun ham bizda localhost link bilan kirmadi 