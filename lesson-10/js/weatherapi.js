


const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={1c63b29616f73119eb969c661944c844}";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });