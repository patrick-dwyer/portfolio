
//Record number of navbar links 
let navLinkList = document.getElementsByClassName("nav-link");
    
//Go through and add event listners to each navbar link. When clicked, will collapse navbar back to button.
for (i=0; i < navLinkList.length; i++) {
    navLinkList[i].addEventListener("click", function() {
        document.getElementById("navbarContent").classList.remove("show");
    });
}