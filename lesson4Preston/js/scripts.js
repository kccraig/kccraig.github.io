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

function wrapper() {
    lastupdate();
    getyear();
}