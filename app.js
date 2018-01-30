var express = require("express"),
app = express(),
pug = require("pug"),
bodyParser = require("body-parser");

app.set("view engine","pug");
app.use(express.static("public"));

app.get("/", function(req,res){
    res.render("index");
});


app.listen(3000, function(){
    console.log("app running on port:3000");
})
