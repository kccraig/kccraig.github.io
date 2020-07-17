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
    const currenttemp = document.querySelector('.currenttemp');
    currenttemp.textContent = Math.round(cozinfo.main.temp);

    const humidity = document.querySelector('.humidity');
    humidity.textContent = Math.round(cozinfo.main.humidity);
    


  

})
