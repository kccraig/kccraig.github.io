
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
            console.table(jsonObject); 
            const towns = jsonObject['towns'];
            while towns[i].name === “Preston” || “Soda Springs” || “Fish Haven” {
            
                let div = document.createElement('div');
                let h2 = document.createElement('h2');
                let p = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let p4 = document.createElement('p');
                // let image = document.createElement('img');


                h2.textContent = towns[i].name;
                p.textContent = towns[i].motto;
                p2.textContent = towns[i].yearFounded;
                p3.textContent = towns[i].currentPopulation;
                p4.textContent = towns[i].averageRainfall;

                // image.setAttribute('src', prophets[i].imageurl);
                // image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' ' + prophets[i].order);
            
                div.appendChild(h2);
                div.appendChild(p);
                div.appendChild(p2);
                div.appendChild(p3);
                div.appendChild(p4);
                // div.appendChild(image); 

                document.querySelector('div.towninfo').appendChild(towninfo);
            }});

            // h2=town name
            // p = motto  
            // p2 = year founded 
            // p3 = population 
            // p4 = annual rain fall  
            // image  