const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];

        for (let i = 0; i <= towns[i].name.length; i++) { 

                    if (towns[i].name == 'Soda Springs') {

                           let eventinput = document.createAttribute('section');
                           let p = document.createAttribute('p');
                           p.textContent = towns[i].events;
                           eventinput.appendChild(p);
                           document.querySelector('div.eventbox').appendChild(eventinput);

                        
            //   document.getElementById('eventbox').textContent = towns[i].events;
                    }
    }})