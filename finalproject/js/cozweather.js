var today = new Date();
var hours = today.getHours();
if (hours > 12) {
  var h = (hours - 12);
  var time = h + ":" + today.getMinutes() + "pm";
} else {
  time = hours + ":" + today.getMinutes() + "am";
}
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?lat=20.4757&lon=-86.9753&appid=1f7a3d0a7558f9b813673ce6add7859a&units=imperial';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    cozinfo = jsObject;
    const currentTemp = document.querySelector('.currenttemp');
    currentTemp.textContent = Math.round(cozinfo.main.temp);

    const humidity = document.querySelector('.humidity');
    humidity.textContent = Math.round(cozinfo.main.humidity);

    // const imagesrc = `https://openweathermap.org/img/w/${cozinfo[o].weather[0].icon}.png`;
    // const desc = fiveday[i].weather[0].description;

    //  document.getElementsByClassName('wicon').src = imagesrc;
    //  document.getElementsByClassName('wicon').alt = desc;


  // const fiveday = cozinfo.list.filter(item => item.dt_txt.includes("12:00:00"));
  // console.log(fiveday);
  // console.log(fiveday[1].main);
  // for (let i = 0; i < fiveday.length; i++) {
  //   document.getElementsByClassName('day').textContent = fiveday[i].main.temp;
  //   const imagesrc = `https://openweathermap.org/img/w/${fiveday[i].weather[0].icon}.png`;
  //   const desc = fiveday[i].weather[0].description;
  //   icon.setAttribute('src', imagesrc);
  //   icon.setAttribute('alt', desc);

  //   document.getElementsByClassName('ticon')[i].src = `https://openweathermap.org/img/w/${fiveday[i].weather[0].icon}.png`;
  //   document.getElementsByClassName('ticon')[i].alt = desc;
  //   if (d >= 7) {
  //     d = 0;
  //   }
  //   document.getElementsByClassName('nextday')[i].textContent = weekday[d];
  //   d++;
  //   document.getElementsByClassName('nowtemp')[i].textContent = fiveday[i].main.temp;
  // }

})
