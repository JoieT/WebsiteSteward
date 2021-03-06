var express = require("express");
var app = express();
var bodyParser= require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", (req,res) => {
 res.render("home"); 
});
app.get("/support", function(req,res){
    res.render("support");
});
app.get("/solutions", function(req,res){
    res.render("solutions");
});

 app.get("/dashboard", function(req,res){
    res.render("dashboard");
});
    app.get("/support", function(req,res){
    res.render("support");
});
 app.get("/template", function(req,res){
    res.render("template");
});

 app.get("/home", function(req,res){
    res.render("home");
});
 app.get("/hands.png", function(req,res){
    res.render("hands");
});
 app.get("/icon.jpg", function(req,res){
    res.render("icon");
});
app.listen(port, () => {
 console.log("Server running on port 3000");
});

app.post('/actionPage', function(req,res){
    console.log(req.body)
    var first = req.body.fName;
    var email = req.body.email;
    console.log(first + " " + email);
    res.redirect("/support");
});