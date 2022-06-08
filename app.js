const express = require("express");
const ejs = require("ejs");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));

const currentYear = new Date().getFullYear();

app.get("/", function(req, res){
    
    res.render("home", {year: currentYear, completedProjects: completedProjectsList});

});

app.get("/projects/:projectTitle", function(req, res) {
    let parameter = req.params.projectTitle;
    completedProjectsList.forEach((project) => {
        if (project.title === parameter) {
            res.render("project-page", {title: project.title, image: project.imgFile, imageAlt: project.imgFileAlt, description: project.longDescription, year: currentYear})
        };
    });
    
    
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
  });

  const completedProjectsList = [
    {
        imgFile: "/images/keeperAppImg.png",
        imgFileAlt: "View of Keeper App logo and note input bar.",
        title: "Keeper App",
        shortDescription: "An application to keep all your notes in.",
        longDescription: "This is going to be the long description that will talk about the languagues, frameworks and methods used.",
        projectURL: "https://l2c5jb.csb.app/"
    },

    {
        imgFile: "/images/toDoListAppImg.png",
        imgFileAlt: "View of Keeper App logo and note input bar.",
        title: "ToDo List App",
        shortDescription: "An application to make your to do list on.",
        longDescription: "This is going to be the long description that will talk about the languagues, frameworks and methods used.",
        projectURL: "https://0lozsd.csb.app/"
    },

    {
        imgFile: "/images/emojipediaImg.png",
        imgFileAlt: "Title emojipedia with four emojis displayed below.",
        title: "Emojipedia",
        shortDescription: "Learn the definitions of emoji's!.",
        longDescription: "Website utilizing React. Was the introduction project for using the map function with javascript. Ability to add items to an array file that is imported and displayed on the website frontend.",
        projectURL: "https://h58nvo.csb.app/"
    },

    {
        imgFile: "/images/digitalClockImg.png",
        imgFileAlt: "Digital clock on single colour background.",
        title: "Digital Clock",
        shortDescription: "View what time it is in your local time zone.",
        longDescription: "Website that displays the current time based on your location. This app continually updates the time with seconds. This was a project to implement my learning of the React useState hook as well the setInterval method.",
        projectURL: "https://y0m1j9.csb.app/"
    },

    {
        imgFile: "/images/theSimonGameImg.png",
        imgFileAlt: "Simon game tiles.",
        title: "The Simon Game",
        shortDescription: "Test your memory with this recall game.",
        longDescription: "This is going to be the long description that will talk about the languagues, frameworks and methods used.",
        projectURL: "https://patrick-dwyer.github.io/TheSimonGame/"
    },

    {
        imgFile: "/images/drumKitImg.png",
        imgFileAlt: "Drum kit logo.",
        title: "Drum 🥁 Kit",
        shortDescription: "Play around with this online drum kit.",
        longDescription: "This is going to be the long description that will talk about the languagues, frameworks and methods used.",
        projectURL: "https://patrick-dwyer.github.io/DrumKit-Site/"

    },

    {
        imgFile: "/images/diceGame1v1Img.png",
        imgFileAlt: "Two dice with title of winner.",
        title: "Dice Game 1 v 1",
        shortDescription: "Play with a friend on a luck based dice roll.",
        longDescription: "This is going to be the long description that will talk about the languagues, frameworks and methods used.",
        projectURL: "https://patrick-dwyer.github.io/RandomDice-1v1/"
    },

    {
        imgFile: "/images/tinDogImg.png",
        imgFileAlt: "Displays dog in phone with ",
        title: "Tin Dog",
        shortDescription: "Website design for a made up application called Tin Dog.",
        longDescription: "This project was focused on honing skills in CSS and Bootstrap to make a good looking home page. Some of the key Bootstrap methods used are containers, cards, carousel, and navbar alongside custom CSS.",
        projectURL: "https://patrick-dwyer.github.io/Boostrap-Project-TInDog/"
    }

    

    

   ]