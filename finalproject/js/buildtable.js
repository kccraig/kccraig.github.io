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


                // var div = document.createElement('div');
                // div.textContent = "Sup, y'all?";
                // div.setAttribute('class', 'note');
                // document.body.appendChild(div);
                // image.setAttribute('src', rentals[i].imageurl);
                // image.setAttribute('alt', rentals[i].name);

                var here = document.getElementsByClassName('tablehere')[0];
                var table = document.createElement('table');
                var tablebody = document.createElement('tbody');
                for (var r = 0; r< 2; r++) {
                    var row = document.createElement('tr');

                    for (var c = 0; c < rentals.length; c++) {
                        var cell = document.createElement('td');
                        var celltext = document.createTextNode('rentals[i].name');
                        celltext.textContent = ('rentals[i].name');
                        cell.appendChild(celltext);
                        row.appendChild(cell);


                        }
                        tablebody.appendChild(row);

                    }

table.appendChild(tablebody);
document.querySelector('div.rentalpricechart').appendChild(table);

                }
                
            })