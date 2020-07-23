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
            let leftdiv = document.createElement('div');
            let rightdiv = document.createElement('div');

            let rezpricefullday = document.createElement('p');
            let walkinhalfday = document.createElement('p');
            let rezprice = document.createElement('h3');
            let walkprice = document.createElement('h3');
            let walkinfullday = document.createElement('p');
            // var div = document.createElement('div');
            // div.textContent = "Sup, y'all?";
            // div.setAttribute('class', 'note');
            // document.body.appendChild(div);
            image.setAttribute('src', rentals[i].imageurl);
            image.setAttribute('alt', rentals[i].name);
            maxpeep.textContent = "Maximum Riders " + rentals[i].maxpersons;
            rezpricehalfday.textContent = "Half Day: $" + rentals[i].rezpricehalfday;
            h2.textContent = rentals[i].name;
            rezprice.textContent = "Reservation Prices: ";
            walkprice.textContent= "Walk-in Prices: ";
            rezpricefullday.textContent = "Full Day $" + rentals[i].rezpricefullday;
            walkinhalfday.textContent = "Half Day: $" + rentals[i].walkinhalfday;
            walkinfullday.textContent = "Full Day: $" + rentals[i].walkinfullday; 

            rightdiv.setAttribute('class', 'rightside');
            leftdiv.setAttribute('class', 'leftside');
            scootcard.setAttribute('ID', 'fullcard');

            rightdiv.appendChild(rezprice);
            leftdiv.appendChild(image); 
            rightdiv.appendChild(h2);
            rightdiv.appendChild(maxpeep);
            rightdiv.appendChild(rezpricefullday);
            rightdiv.appendChild(rezpricehalfday);
            
            rightdiv.appendChild(walkprice);
            rightdiv.appendChild(walkinhalfday);
            rightdiv.appendChild(walkinfullday);
            scootcard.appendChild(leftdiv);
            scootcard.appendChild(rightdiv);
        
            document.querySelector('div.rentalpricechart').appendChild(scootcard);
           


        }
    })