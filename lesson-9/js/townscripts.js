const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {

            if ((towns[i].name == 'Preston') || (towns[i].name == 'Fish Haven') || (towns[i].name == 'Soda Springs')) {

                let town = document.createElement('section');
                let h2 = document.createElement('h2');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let p4 = document.createElement('p');
                let pic = document.createElement('img');

                h2.textContent = towns[i].name;
                p1.textContent = ' "' + towns[i].motto + '" ';
                p2.textContent = "Founded in " + towns[i].yearFounded;
                p3.textContent = "Population " + towns[i].currentPopulation;
                p4.textContent = "Average Rainfall " + towns[i].averageRainfall + '"';

                pic.setAttribute('src', "images/townimages/" + towns[i].photo);
                
                pic.setAttribute('alt', 'Photo of ' + towns[i].name);

                town.appendChild(h2);
                town.appendChild(p1);
                town.appendChild(p2);
                town.appendChild(p3);
                town.appendChild(p4);
                town.appendChild(pic);

                document.querySelector('div.towninfo').appendChild(town);
            }
        }
    });

// h2 town name
// p1 motto  
// p2 year founded  
// p3 population  
// p4 annual rain fall 