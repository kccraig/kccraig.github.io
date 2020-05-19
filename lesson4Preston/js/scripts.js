// JavaScript Document
//preston javascript



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
    
    var n = weekday[d.getDay()];
    
    document.getElementById("dayoftheweek").innerHTML = n + ", ";
}


function month() {
    var d = new Date();
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var n = month[d.getMonth()];
    document.getElementById("mon").innerHTML = n;

}
function dayofmonth() {
    var d = new Date();
    document.getElementById("day").innerHTML = d.getDate();
}




function wrapper() {
    getyear();
    weekday();
    month();
    dayofmonth();
   

}

// Wednesday, 24 July 2020