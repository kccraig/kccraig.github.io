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

            for (let i = 0; i < rentals.length; i++) {

                var row = document.createElement('tr');

                for (var j = 0; j < rentals.length; j++) {
                    var cell = document.createElement('td');
                    var cellText = document.createTextNode(rentals[j].name);
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                }

                tblBody.appendChild(row);
            }
            tbl.appendChild(tblBody);
            body.appendChild(tbl);
            tbl.setAttribute('border', '2');

        }



    )