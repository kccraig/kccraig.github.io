const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
            console.table(jsonObject); // temporary checking for valid response and data parsing
            const prophets = jsonObject['prophets'];
            for (let i = 0; i < prophets.length; i++) {
                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                let p = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let image = document.createElement('img');

                h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
                p.textContent = prophets[i].birthdate;
                p2.textContent = prophets[i].birthplace;
                p3.textContent = prophets[i].numofchildren;
                image.setAttribute('src', prophets[i].imageurl);

                card.appendChild(h2);s
                card.appendChild(p);
                card.appendChild(p2);
                card.appendChild(p3);

                document.querySelector('div.cards').appendChild(card);
            }});
        