const requestURL = 'js/rentalprices.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
            console.table(jsonObject); 
            const rentals = jsonObject['rentalpricechart'];
            console.log(rentals);
            for (let i = 0; i < prophets.length; i++) {
                let chart = document.createElement('section');
                let h2 = document.createElement('h2');

                h2.textContent = rentals[i].

                card.appendChild(h2);

                document.querySelector('div.cards').appendChild(card);
            }

    }
    )

