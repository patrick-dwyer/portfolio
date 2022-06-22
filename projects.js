// All projects compiled in an array
const completedProjectList = [
    {
        imgFile: "/images/secretsAppImg.png",
        imgFileAlt: "Login screen with key, secerets heading, quotes share your secrets anonymously and login/register.",
        title: "Secrets Keeper App",
        shortDescription: "An application to keep all your secrets anonymously!",
        longDescription: "This project was built during a module about authentication within a website. The website was built with different layers to learn about various methods of having a user authenticate. We started with the basics of usernames and passwords. This included encryption, hashing and salting. Building on this knowledge, inclusion of cookies and sessions were added and with the final touches using OAuth2.0 with Google and Facebook (now Meta).",
        projectURL: "https://pjd-secrets.herokuapp.com/"
    },

    {
        imgFile: "/images/todolist-v3Img.png",
        imgFileAlt: "View of todolist notepad with actions described for use.",
        title: "ToDoList App",
        shortDescription: "An application to keep all your to do list items.",
        longDescription: "Built by putting together Nodejs using express, MongoDB with mongoose and EJS. This project has a sustained connection to a database with MongoDB Atlas and allows users to input notes that are persisted. Custom parameters can be used to make new lists that are stored in the database. The ability to add and delete items is given by clicking the + icon or checkbox respectively. This app was a full effort of all that has been learned in through my course to utilize both front and back end techniques.",
        projectURL: "https://l2c5jb.csb.app/"
    },

    {
        imgFile: "/images/keeperAppImg.png",
        imgFileAlt: "View of Keeper App logo and note input bar.",
        title: "Keeper App (FrontEnd)",
        shortDescription: "An application to keep all your notes in.",
        longDescription: "This frontend was built using React. Some important concepts utilized in this project were declarative programming, state management and Javascript concepts (such as mapping, filtering, ternary operator, Logical AND, and arrow functions). What was interesting with this project was the ability to have different components interact with each other through properties and the ability to create and remove notes. The result is a modern looking user interface with built in functionality.",
        projectURL: "https://l2c5jb.csb.app/"
    },

    {
        imgFile: "/images/toDoListAppImg.png",
        imgFileAlt: "View of Keeper App logo and note input bar.",
        title: "ToDo List (FrontEnd)",
        shortDescription: "An application to make your to do list on.",
        longDescription: "This frontend was built using React. Similar to the Keeper App hooks, props and the utilization of Javascript were key to functionality. This was a precursor to the Keeper App to help practice the concepts required. You can add notes by typing and clicking the Add button and delete by clicking on the list item. The data submitted is not persisted and resets upon refresh or navigation away from the page.",
        projectURL: "https://0lozsd.csb.app/"
    },

    {
        imgFile: "/images/emojipediaImg.png",
        imgFileAlt: "Title emojipedia with four emojis displayed below.",
        title: "Emojipedia",
        shortDescription: "Learn the definitions of emojis!",
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
        longDescription: "One of my favorite projects I’ve worked on. This was setup from scratch where I went step by step. The first step was to create all the HTML elements required, then style them with CSS. Once this was completed, Javascript was used to bring functionality to this project. This project was written using JQuery to provide more concise code. Some of the important concepts used were event listeners, logic statements, using DOM manipulation techniques for CSS animation and switch statements. Something I had added once the game was complete was a mobile friendly button to allow this game to be started without a key press but by clicking the button.",
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


   //All highlighted projects - max three items
   const highlightedProjectList = [
    {
        imgFile: "/images/todolist-v3Img.png",
        imgFileAlt: "View of todolist notepad with actions described for use.",
        title: "ToDoList App",
        shortDescription: "An application to keep all your to do list items.",
        longDescription: "Built by putting together Nodejs using express, MongoDB with mongoose and EJS. This project has a sustained connection to a database with MongoDB Atlas and allows users to input notes that are persisted. Custom parameters can be used to make new lists that are stored in the database. The ability to add and delete items is given by clicking the + icon or checkbox respectively. This app was a full effort of all that has been learned in through my course to utilize both front and back end techniques.",
        projectURL: "https://l2c5jb.csb.app/"
    },
    {
        imgFile: "/images/keeperAppImg.png",
        imgFileAlt: "View of Keeper App logo and note input bar.",
        title: "Keeper App",
        shortDescription: "An application to keep all your notes in.",
        longDescription: "This frontend was built using React. Some important concepts utilized in this project were declarative programming, state management and Javascript concepts (such as mapping, filtering, ternary operator, Logical AND, and arrow functions). What was interesting with this project was the ability to have different components interact with each other through properties and the ability to create and remove notes. The result is a modern looking user interface with built in functionality.",
        projectURL: "https://l2c5jb.csb.app/"
    },

    {
        imgFile: "/images/theSimonGameHighlight.png",
        imgFileAlt: "Simon game tiles.",
        title: "The Simon Game",
        shortDescription: "Test your memory with this recall game.",
        longDescription: "One of my favorite projects I’ve worked on. This was setup from scratch where I went step by step. The first step was to create all the HTML elements required, then style them with CSS. Once this was completed, Javascript was used to bring functionality to this project. This project was written using JQuery to provide more concise code. Some of the important concepts used were event listeners, logic statements, using DOM manipulation techniques for CSS animation and switch statements. Something I had added once the game was complete was a mobile friendly button to allow this game to be started without a key press but by clicking the button.",
        projectURL: "https://patrick-dwyer.github.io/TheSimonGame/"
    } 

   ]

   //Current Projects
   const currentProjectList = [
    {
        title: "Secret Santa Generator",
        description: "An application that would allow users to input members name to be included in secret santa. Options for this program would include to either give permutations or combinations based on the family/friend group criteria.",
        name: "headingOne",
        control: "collapseOne",
        dataTarget: "#collapseOne"
    },

    {
        title: "The Dice Game",
        description: "A friend of mine taught me a really cool game with six dice. I am looking to replicate this through a web application with single and multiplayer options.",
        name: "headingTwo",
        control: "collapseTwo",
        dataTarget: "#collapseTwo"
    },

    {
        title: "Stock Notifier App",
        description: "An app that will notify stock prices on certain schedules and/or if price of the stock hits specific criteria.",
        name: "headingThree",
        control: "collapseThree",
        dataTarget: "#collapseThree"
    },

    {
        title: "Receipt App",
        description: "An application that would allow users to track spending at grocery stores.",
        name: "headingFour",
        control: "collapseFour",
        dataTarget: "#collapseFour"
    }

   ]


   exports.highlightedProjectList = highlightedProjectList
   exports.completedProjectList = completedProjectList
   exports.currentProjectList = currentProjectList