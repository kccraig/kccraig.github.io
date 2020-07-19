const requestURL = 'js/rentalprices.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
            console.table(jsonObject);
            const rentals = jsonObject['rentalpricechart'];
            console.log(rentals);

            var body = document.getElementsByClassName('popcorn')[0];

            var tbl = document.createElement('table');
            var tblBody = document.createElement('tbody');
      
            for (let i = 0; i < 6; i++) {

                var row = document.createElement('tr');

                for (var j = 0; j < rentals[j].length; j++) {
                    
                    var cell1 = document.createElement('td');
                    var name = document.createTextNode(rentals[j].name);
                    var cell2 = document.createElement('td');
                    var maxper = document.createTextNode(rentals[j].maxpersons);
                    cell1.appendChild(name);
                    cell2.appendChild(maxper);
                    row.appendChild(cell1);
                    row.appendChild(cell2);
                }

                tblBody.appendChild(row);
            }
            tbl.appendChild(tblBody);
            body.appendChild(tbl);
            tbl.setAttribute('border', '2');

        }



    )