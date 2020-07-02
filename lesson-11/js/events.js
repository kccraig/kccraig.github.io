const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
            console.table(jsonObject); 
            const towns = jsonObject['towns'];
          
           document.getElementById('box').innerHTML = towns[0].name;
           
           for (let i = 0; i < towns.length; i++) {
          if (towns[0].name == 'Soda Springs') {
            
document.getElementById('box').innerHTML = towns[i].name;
          }
          else {
            if (towns[0].name == 'Fish Haven') {
                document.getElementById('box').innerHTML = towns[i].name;
          }
        }


    }})