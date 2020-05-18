// JavaScript Document
//preston javascript


function toggleMenu() {
	document.getElementById("primarynav").classList.toggle("hide");
}



function lastupdate() {
    document.getElementById("updatebox").textContent = document.lastModified;
}

function getyear() {
    var x = new Date();
    var y = x.getFullYear();
    document.getElementById("currentyear").innerHTML = y;
}

function weekday() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

     var w = weekday[d.getDay()];
     document.getElementById("dayoftheweek").innerHTML = w;
    }

function wrapper() {
    lastupdate();
    getyear();
    toggleMenu();
    weekday();
}
window.addEventListener('onload', wrapper());
// Wednesday, 24 July 2020