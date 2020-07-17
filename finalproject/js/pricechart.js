const requestURL = 'js/rentalprices.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
            console.table(jsonObject); 
            const rentals = jsonObject['rentalpricechart'];
            console.log(rentals);
         for (let i=0; i<rentals.length; i++) {
let scootcard = document.createElement('section');
let h2 = document.createElement('h2');

h2.textContent = rentals[i].name;

scootcard.appendChild(h2);

document.querySelector(div.rentalpricechart).appendChild(scootcard);


         }
            }
    )

