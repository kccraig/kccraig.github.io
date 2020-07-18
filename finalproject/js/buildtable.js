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
            var c = rentals[0];
            alert(c.name);
            for (let i = 0; i < rentals.length; i++) {

                var row = document.createElement('tr');

                for (var j = 0; j < rentals.length; j++) {
                    var cell1 = document.createElement('td');
                    var cell2 = document.createElement('td');
                    var name = document.createTextNode(rentals[j].name);
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