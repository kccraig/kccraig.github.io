const apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=1c63b29616f73119eb969c661944c844&units=imperial';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    
    // const imagesrc = `https://openweathermap.org/img/w/$jsObject.weather[0].icon)`;
    const fiveday = jsObject.list.filter(item => item.dt_txt.includes("18:00:00"));
    console.log(fiveday);
    console.log(fiveday[1].main);

    for (let i = 0; i < fiveday.length; i++) {
        let table = document.createElement('table');

        let tr = document.createElement('tr');
        let tr2 = document.createElement('tr');
        
        let td1 = document.createElement('td');
        let td2 = document.createAttribute('td');
        
        let image = document.createElement('img');
        var x = new Date();
        var y = new Date();
        
       
        table.appendChild(tr);
        table.appendChild(tr2);
        tr.appendChild(td1);
        tr2.appendChild(td2);
        
      
        table.appendChild(tr2);

        // tr2.appendChild(td2);
        
        
        td1.textContent = x;
        td2.textContent = y;
      
        document.querySelector('div#table').appendChild(table);
        

  














    // // document.getElementById('current-temp').textContent = jsObject.main.temp;
    // const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png'; // note the concatenation
    // console.log(imagesrc);
    // const desc = jsObject.weather[0].description; // note how we reference the weather array
    // document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
    // document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
    // document.getElementById('icon').setAttribute('alt', desc);
}});
