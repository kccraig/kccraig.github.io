const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {
            console.log(towns[i].name);
            if (towns[i].name == 'Soda Springs') {
                let eventinput = document.createElement('section');
                for (let x = 0; x <= towns[i].events.length; x++) {
                    let p = document.createElement('p');
                    p.textContent = towns[i].events[x];
                    eventinput.appendChild(p);
                    document.querySelector('div.eventbox').appendChild(eventinput);
                }
            }
        }
    })