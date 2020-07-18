const requestURL = 'js/rentalprices.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const rentals = jsonObject['rentalpricechart'];
        console.log(rentals);
        for (let i = 0; i < rentals.length; i++) {
            let scootcard = document.createElement('section');
            let h2 = document.createElement('h2');
            let image = document.createElement('img');
            let maxpeep = document.createElement('p');
            let rezpricehalfday = document.createElement('p');

       

            image.setAttribute('src', rentals[i].imageurl);
            image.setAttribute('alt', rentals[i].name);
            maxpeep.textContent = "Maximum Riders " + rentals[i].maxpersons;
            rezpricehalfday.textContent = "Rezervation Price " + rentals[i].rezpricehalfday;
            h2.textContent = rentals[i].name;

            scootcard.appendChild(image); 
            scootcard.appendChild(h2);
            scootcard.appendChild(maxpeep);
            scootcard.appendChild(rezpricehalfday);
        
            document.querySelector('div.rentalpricechart').appendChild(scootcard);


        }
    })