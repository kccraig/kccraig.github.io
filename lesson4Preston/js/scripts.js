// JavaScript Document
//preston javascript


function lastupdate() {
    document.getElementById("updatebox").textContent = document.lastModified;
}

function getyear() {
    var x = new Date();
    var y = x.getFullYear();
    document.getElementById("yearbox").innerHTML = y;
}

function wrapper() {
    lastupdate();
    getyear();
}
function toggleMenu() {
	document.getElementById("primarynav").classList.toggle("hide");
}