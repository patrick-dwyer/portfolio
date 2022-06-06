const express = require("express");
const ejs = require("ejs");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));

const currentYear = new Date().getFullYear();

app.get("/", function(req, res){

    res.render("home", {year: currentYear});

});

app.listen(3000, function() {
    console.log("Server started on port 3000");
  });