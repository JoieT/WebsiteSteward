var express = require("express");
var app = express();
var bodyParser= require("body-parser");
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.get("/", (req,res) => {
 res.render("home"); //<— Change to main html file
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
app.listen(port, () => {
 console.log("Server running on port 3000");
});