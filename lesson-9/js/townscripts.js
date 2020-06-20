
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
            console.table(jsonObject); // temporary checking for valid response and data parsing
            const prophets = jsonObject['towns'];
            for (let i = 0; i < towns.length; i++) {
                let towncard = document.createElement('section');
                let h2 = document.createElement('h2');
                let p = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let p4 = document.createElement('p');
                let image = document.createElement('img');
                


                h2.textContent = towns[i].name;
                p.textContent = towns[i].motto;
                p2.textContent = towns[i].yearFounded;
                p3.textContent = towns[i].currentPopulation;
                p4.textContent = towns[i].averageRainfall;


                // image.setAttribute('src', towns[i].imageurl);
                
            
                towninfo.appendChild(h2);
                towninfo.appendChild(p);
                towninfo.appendChild(p2);
                towninfo.appendChild(p3);
                towninfo.appendChild(p4);
                // towninfo.appendChild(image); 

                document.querySelector('div.towninfo').appendChild(towninfo);
            }});

            // h2=town name
            // p = motto  
            // p2 = year founded 
            // p3 = population 
            // p4 = annual rain fall  
            // image  