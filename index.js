
const collapseNav = function() {

    //Record number of navbar links 
let navLinkList = document.getElementsByClassName("nav-link");
    
//Go through and add event listners to each navbar link. When clicked, will collapse navbar back to button.
for (i=0; i < navLinkList.length; i++) {
    navLinkList[i].addEventListener("click", function() {
        console.log("clicked");
        // document.getElementById("navbarContent").classList.remove("show");
    });
}

console.log("This function has run.")

}


exports.collapseNav = collapseNav
