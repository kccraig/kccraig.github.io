// const apiURL = 'http://api.openweathermap.org/data/2.5/weather?lat=42.6543652&lon=-111.6046687&appid=5aa9a97658cd372399c4ff0e81b82f97'; 



function toggleMenu() {
  document.getElementById("primarynav").classList.toggle("hide");
}

/*CURRENT TIME*/
var today = new Date();
var hours = today.getHours();
if (hours > 12) {
  var h = (hours - 12);
  var time = h + ":" + today.getMinutes() + "pm";
} else {
  time = hours + ":" + today.getMinutes() + "am";
}
document.getElementById("nowtime").innerHTML = time;

// 3242
// const apiURL = 'https://api.openweathermap.org/data/2.5/weather?lat=42.6543652&lon=-111.6046687&appid=5aa9a97658cd372399c4ff0e81b82f97'; 
const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&APPID=1c63b29616f73119eb969c661944c844&units=imperial';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const currentTemp = document.querySelector('#current-temp');
    currentTemp.textContent = Math.round(jsObject.list[0].main.temp);
  

    const humidity = document.querySelector('#humidity');
    humidity.textContent = jsObject.list[0].main.humidity;

    const icon = document.querySelector('.ticon');

    const windsp = document.querySelector('#windspeed');
    windsp.textContent = jsObject.list[0].wind.speed;
    // const imagesrc = `https://openweathermap.org/img/w/$jsObject.weather[0].icon)`;
    var t = currentTemp;
    var s = windsp;
    if (t < 50 && s > 3) {
      var f = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (.4275 * t * Math.pow(s, 0.16));
      var c = Math.round(f);
      document.getElementById("wchill").innerHTML = c + "°";
    } else {
      document.getElementById("wchill").innerHTML = "none";
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
    var d = x.getDay() + 1;


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

    if (n == weekday[5]) {
      document.getElementById("banner").style.display = "block";
    } else {
      document.getElementById("banner").style.display = "none";
    }

    const fiveday = jsObject.list.filter(item => item.dt_txt.includes("18:00:00"));
    console.log(fiveday);
    console.log(fiveday[1].main);
    for (let i = 0; i < fiveday.length; i++) {
      document.getElementsByClassName('day').textContent = fiveday[i].main.temp;
      const imagesrc = `https://openweathermap.org/img/w/${fiveday[i].weather[0].icon}.png`;
      const desc = fiveday[i].weather[0].description;
      icon.setAttribute('src', imagesrc);
      icon.setAttribute('alt', desc);

      document.getElementsByClassName('ticon')[i].src = `https://openweathermap.org/img/w/${fiveday[i].weather[0].icon}.png`;
      if (d >= 7) {
        d = 0;
      }
  
      document.getElementsByClassName('nextday')[i].textContent = weekday[d];
      d++;
      document.getElementsByClassName('nowtemp')[i].textContent = fiveday[i].main.temp;
  }
  })