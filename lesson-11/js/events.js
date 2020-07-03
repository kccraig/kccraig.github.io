const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
            console.table(jsonObject);
            const towns = jsonObject['towns'];

            for (let i = 0; i < towns.length; i++) {
                if (towns[i].name == 'Soda Springs') {
                    let m = towns[i].name;
                    let eventbox = document.createElement('section');
                    let h3 = document.createElement('h3');
                    let event1 = document.createElement('p');
                    let event2 = document.createElement('p');

                    h3.textContent = "Fun Events in" + " " + towns[i].name + " " + "this year";
                    event1.textContent = towns[i].events;

                }

                eventbox.appendChild(h3);
                eventbox.appendChild(event1);






                document.querySelector('section.eventbox').appendChild(eventbox);

            }




        }
    })