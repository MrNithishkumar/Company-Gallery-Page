
//select navbar link option
var about_option_box = document.querySelector(".about-option-box")
function show_about_box() {
    about_option_box.style.display = "block"
}
function close_about_box() {
    about_option_box.style.display = "none"
}

//select sidenavbar
var sidenavbar = document.querySelector(".side-navbar")

function shownavbar() {
    sidenavbar.style.left = "0"
}
function closenavbar() {
    sidenavbar.style.left = "-90%"
}

//side navbar about option box

var side_navbar_about_option_box = document.querySelector(".side-navbar-about-option-box")

function show_side_navbar_about_box() {
    side_navbar_about_option_box.style.display = "block"
}
function close_side_navbar_about_box() {
    side_navbar_about_option_box.style.display = "none"
}


document.addEventListener("contextmenu", function (event) {
    event.preventDefault(); // Disable right-click
});

document.addEventListener("keydown", function (event) {
    if (event.key == "F12" ||
        (event.ctrlKey && event.shiftKey && event.key == "I") ||
        (event.ctrlKey && event.shiftKey && event.key == "J") ||
        (event.ctrlKey && event.key == "U") ||
        (event.ctrlKey && event.key == "S") ||
        (event.ctrlKey && event.key == "H")) {
        event.preventDefault(); // Block inspect element shortcuts
    }
});