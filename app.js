const express = require("express");
const ejs = require("ejs");
const app = express();
const completedProjects  = require(__dirname + "/projects.js");

app.set('view engine', 'ejs');
app.use(express.static("public"));

const currentYear = new Date().getFullYear();


app.get("/", function(req, res){
    
    res.render("home", {year: currentYear, completedProjects: completedProjects.completedProjectsList});

});

app.get("/projects/:projectTitle", function(req, res) {
    let parameter = req.params.projectTitle;
    
    completedProjects.completedProjectsList.forEach((project) => {
        if (project.title === parameter) {
            res.render("project-page", {title: project.title, image: project.imgFile, imageAlt: project.imgFileAlt, description: project.longDescription, year: currentYear})
        };
    });
});

// Heroku port settings
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
    console.log("Server started sucessfully.");
  });
