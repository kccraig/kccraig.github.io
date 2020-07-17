const requestURL = 'js/rentalprices.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
            console.table(jsonObject); 
            const rentals = jsonObject['rentalpricechart'];
            console.log(rentals);
         
            }

    
    )

