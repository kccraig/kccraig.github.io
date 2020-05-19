// JavaScript Document
//preston javascript



function getyear() {
    var x = new Date();
    var y = x.getFullYear();
    document.getElementsByClassName("currentyear").innerHTML = y;
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

// function fullDate() {
//     var d = new Date();
//     var k = d.toLocaleDateString();
//     document.getElementById("fulldate").innerHTML=k;
//     document.getElementById("fulldate")
// const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// document.getElementById("fulldate").innerHTML(event.toLocaleDateString(en-us, 'long','numeric','long','numeric'));


// }




function wrapper() {
    getyear();
    weekday();
    month();
    dayofmonth();
    // fullDate()

}

// Wednesday, 24 July 2020

