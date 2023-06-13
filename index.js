function changeActiveLink(event) {
    // Remove "active" class from all links
    var links = document.getElementsByClassName("topnav")[0].getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }

    // Add "active" class to the clicked link
    var clickedLink = event.target;
    clickedLink.classList.add("active");
}