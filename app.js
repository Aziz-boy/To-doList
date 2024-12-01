console.log('Web Serverni boshlash');
const express = require("express");
const app = express();

//MongoDB chaqirish
const db = require("./server").db();
const new_mongodb = require("mongodb");

// *****1 - Kirish codelari*******
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// ********2 - Sessionga bogliq bolgan codelar*******
// ********3 - Views ga bogliq codelar*********

app.set("views", "views");
app.set("view engine", "ejs");

// *****4 - Rooting ga bogliq codelar********
app.post("/create-item", (req, res) => {
    console.log('user entered /create-item');
    // console.log(req.body);
    // res.end("success");
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        console.log(data.ops);
        res.json(data.ops[0]);
    });
});

app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    db.collection("plans").deleteOne(
        {_id: new_mongodb.ObjectId(id)},
        function(err, data) {
            res.json({state: "success"});
        }
    );
});

app.post("/edit-item", (req, res) => {
    console.log('user entered /edit-item');
    const data = req.body;
    console.log(data);
    db.collection("plans").findOneAndUpdate(
        { _id: new_mongodb.ObjectId(data.id) }, 
        { $set: {reja: data.new_input} }, 
        (err, data) => {
            res.json({ state: "success" })
        })
});

app.post("/delete-all", (req, res) => {
    if(req.body.delete_all) {
        db.collection("plans").deleteMany(function() {
            res.json({ state: "Nothing Left behind 😅" });
        })
    }
})

app.get("/", function(req, res) {
    console.log("STEP2: Frontend => Backend");
    console.log('user entered /');
    console.log("STEP3: Backend => Database");
    db.collection("plans")
    .find()
    .toArray((err, data) => {
        if(err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            // console.log(data);
            console.log("STEP4: Database => Backend");
            // console.log("data: ", data);
            res.render("reja", { items: data });
            console.log("STEP5: DONE");
        }
    });
});


module.exports = app;