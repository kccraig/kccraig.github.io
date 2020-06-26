var x = new Date();
alert(x);

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var n = weekday[x.getDay()];

const apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=1c63b29616f73119eb969c661944c844&units=imperial';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);