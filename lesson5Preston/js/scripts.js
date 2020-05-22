// JavaScript Document
//preston javascript

function toggleMenu() {
    document.getElementById("primarynav").classList.toggle("hide");
}

var x = new Date();
var y = x.getFullYear();
document.getElementsByClassName("currentyear")[0].innerHTML = y;

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var n = weekday[x.getDay()];

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
var mon = month[x.getMonth()];

var fulldate = n + ", " + x.getDate() + " " + mon + " " + y;
document.getElementById("thedate").innerHTML = fulldate;

{/* <script>
function myFunction() {
  document.getElementById("panel").style.display = "block";
}
</script> */}