
const express = require('express');
const app = express(); 
const http = require('http'); 
const fs = require('fs');



//MongoDB choqirish
const db = require("./server").db(); 
const new_mongodb = require("mongodb");

// 1 **KIRISH** expressga kirib kelgan codelar yoziladi
app.use(express.static("public"));
app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 

// 2 **Session CODE** 
// (Bu yerda Session code yozilishi mumkin)

// 3 **VIEWS CODE** Backenda front end yasaymiz (VIEW yasaymiz)
// BSSR back-end-server-side renderring yo'nalishini tanladik
app.set("views", "views"); 
app.set("view engine", "ejs"); 

// 4 **Router'larga** mo'ljallangan
app.post('/create-item' , (req,res) => {
console.log("user entered /create-itemgit"); 
 console.log(req.body);
 const new_reja = req.body.reja;
 db.collection('plans').insertOne({reja: new_reja }, (err, data) => { 
    console.log(data.ops);
    res.json(data.ops[0]);
 });
});

app.get('/author', (req,res) => {
    res.render('author', { user:user});
})

app.post("/delete-item", (req,res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne(
    {_id: new_mongodb.ObjectId(id)}, 
      function(err,data) { 
        res.json({state:"success"}); 
  }) 
});

app.post("/edit-item", (req,res) => {
    const data = req.body;
    console.log(data)
    db.collection("plans").findOne(
        {_id: new_mongodb.ObjectId(data.id)},
        {$set: {reja: data.new_input}}, 
        function(err, data){
            res.json({state:"success"});
        })

});


app.post("/delete-all", (req, res) => {
    if( req.body.delete_all) {
        db.collection("plans").deleteMany( function() {
            res.json({state:"Hamma rejalar O'chirildi!"});
        })
    }
})


app.get('/', function(req, res) {
    console.log("user entered /"); 
    db.collection('plans').find().toArray((err, data) => { 
        if (err) {
            console.log("Error:", err);
            res.status(500).send("Something went wrong");
        } else {
            res.render('reja', {items: data}); 
        }
    });
});





module.exports = app; 




