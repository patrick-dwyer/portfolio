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

// Heroku port settings
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
    console.log("Server started sucessfully.");
  });

  const completedProjectsList = [
    {
        imgFile: "/images/keeperAppImg.png",
        imgFileAlt: "View of Keeper App logo and note input bar.",
        title: "Keeper App",
        shortDescription: "An application to keep all your notes in.",
        longDescription: "This frontend was built using React. Some important concepts utilized in this project were declarative programming, state management and Javascript concepts (such as mapping, filtering, ternary operator, Logical AND, and arrow functions). What was interesting with this project was the ability to have different components interact with each other through properties and the ability to create and remove notes. The result is a modern looking user interface with built in functionality.",
        projectURL: "https://l2c5jb.csb.app/"
    },

    {
        imgFile: "/images/toDoListAppImg.png",
        imgFileAlt: "View of Keeper App logo and note input bar.",
        title: "ToDo List App",
        shortDescription: "An application to make your to do list on.",
        longDescription: "This frontend was built using React. Similar to the Keeper App hooks, props and the utilization of Javascript were key to functionality. This was a precursor to the Keeper App to help practice the concepts required. You can add notes by typing and clicking the Add button and delete by clicking on the list item. The data submitted is not persisted and resets upon refresh or navigation away from the page.",
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
        longDescription: "One of my favorite projects I’ve worked on. This was setup from scratch where I went step by step. The first step was to create all the HTML elements required, then style them with CSS. Once this was completed, Javascript was used to bring functionality to this project. This project was written using JQuery. Some of the important concepts used were event listeners, logic statements, using DOM manipulation techniques for CSS animation and switch statements. Something I had added once the game was complete was a mobile friendly button to allow this game to be started without a key press but by clicking the button.",
        projectURL: "https://patrick-dwyer.github.io/TheSimonGame/"
    },

    {
        imgFile: "/images/drumKitImg.png",
        imgFileAlt: "Drum kit logo.",
        title: "Drum 🥁 Kit",
        shortDescription: "Play around with this online drum kit.",
        longDescription: "This game was a prerequisite to The Simon Game. Concepts that were learned and practiced during this project were loops, event listeners, switch statements, and nested functions.",
        projectURL: "https://patrick-dwyer.github.io/DrumKit-Site/"

    },

    {
        imgFile: "/images/diceGame1v1Img.png",
        imgFileAlt: "Two dice with title of winner.",
        title: "Random Dice 1 v 1",
        shortDescription: "Play with a friend on a luck based dice roll.",
        longDescription: "A fun game of chance between two dice. This was my first javascript project and involved logic statements, DOM techniques for altering elements, functions and loops. This was a pretty cool project because it let me see that some simple code can help build a simple game which felt quite rewarding.",
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