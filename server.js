console.log("Web serverni boshlash");
const express = require('express');
const app = express(); //express instance yani bu orqali biz express objectni ishlatamiz
const http = require('http'); //http bu bizning core modulimiz

//1 Kirish code
app.use(express.static("public")); //har qanday browserdan kirib kelayotgan zaproslar uchun public folder ochiq degani yani faqat public folderni clientlarga ochib beryapmiz.
app.use(express.json()); //bizga kirib kelayotgan object formatdagi datani json formatga otkazib beradi 
app.use(express.urlencoded({extended: true})); // buni yozmasak html forumdan post qilingan malumotlarni express serverimiz ignore qiladi yani serverga kiritmaydi. 
//2 : Session code

//3 Views code
//BSSR back-end-server-side renderring yo'nalishini tanladik
app.set("views","views");
app.set("view engine","ejs"); //yani views folderni ichidan o'qiydi. ejs orqali back endni ichida front end yasaymiz

//4 Routing code
app.get("/hello", function(req, res) {
    res.end(`<h1 style="background: red">Hello, world by Adambek</h1>`);
});

app.get("/gift", function(req, res) {
    res.end(`<h1 style="background: yellow">Siz sovg'alar bo'limidasiz</h1>`);
}); //shu yozgan html code aynan localhost:/gift da kelib chiqadi yani biz bu orqali address shakklantiryapmiz

const server = http.createServer(app);   
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running successfully on ${PORT}`);
});
