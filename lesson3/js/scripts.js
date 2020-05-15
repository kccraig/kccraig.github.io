
function lastupdate() {
    document.getElementById("updatebox").textContent = document.lastModified;
}

function getyear() {
    var x = new Date();
    var y = x.getFullYear();
    document.getElementById("currentyear").innerHTML = y;
}
function fullDay() {
    var dy = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    
    var n = weekday[dy.getDay()];
    document.getElementById("dayName").innerHTML = n;
    // <h1><span id="dayName">gotime</span></h1>
    }

function wrapper() {
    fullDay();
    lastupdate();
    getyear();
    
}
