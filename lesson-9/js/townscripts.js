const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
            console.table(jsonObject); 
            const towns = jsonObject['towns'];
            for (let i = 0; i < towns.length; i++) {
                let town = document.createElement('section');
                let h2 = document.createElement('h2');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let p4 = document.createElement('p');
                // let image = document.createElement('img');


                h2.textContent = towns[i].name;
                p1.textContent = towns[i].motto;
                p2.textContent = towns[i].yearFounded;
                p3.textContent = towns[i].currentPopulation;
                p4.textContent = towns[i].averageRainfall;

                // image.setAttribute('src', prophets[i].imageurl);
             
            
                town.appendChild(h2);
                town.appendChild(p1);
                town.appendChild(p2);
                // town.appendChild(image); 

                document.querySelector('div.towninfo').appendChild(town);
            }});

            // h2 town name
            // p1 motto  
            // p2 year founded  
            // p3 population  
            // p4 annual rain fall 
