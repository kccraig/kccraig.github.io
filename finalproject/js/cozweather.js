// const apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=1c63b29616f73119eb969c661944c844&units=imperial';

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?lat=20.5113&lon=86.9302&appid=1f7a3d0a7558f9b813673ce6add7859a&units=imperial';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    cozinfo = jsObject;
    const currentTemp = document.querySelector('.current-temp');
    currentTemp.textContent = Math.round(cozinfo.main.temp);

    const humidity = document.querySelector('.humidity');
    humidity.textContent = Math.round(cozinfo.main.humidity);

    // const imagesrc = `https://openweathermap.org/img/w/${cozinfo[o].weather[0].icon}.png`;
    // const desc = fiveday[i].weather[0].description;

    //  document.getElementsByClassName('wicon').src = imagesrc;
    //  document.getElementsByClassName('wicon').alt = desc;

  })