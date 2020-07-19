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

        var row = document.createElement('tr');
        var th1 = document.createElement('th');
        th1.textContent = "header";
        row.appendChild(th1);

        for (let i = 0; i < 6; i++) {

            var row = document.createElement('tr');

            var cell1 = document.createElement('td');
            var name = document.createTextNode(rentals[i].name);

            var cell2 = document.createElement('td');
            var maxper = document.createTextNode(rentals[i].maxpersons);

            var cell3 = document.createElement('td');
            var rezpricehalfday = document.createTextNode("$" + rentals[i].rezpricehalfday);

            var cell4 = document.createElement('td');
            var rezpricefullday = document.createTextNode("$" + rentals[i].rezpricefullday);

            var cell5 = document.createElement('td');
            var walkinhalfday = document.createTextNode(rentals[i].walkinhalfday);

            var cell6 = document.createElement('td');
            var walkinfullday = document.createTextNode(rentals[i].walkinfullday);


            cell1.appendChild(name);
            cell2.appendChild(maxper);
            cell3.appendChild(rezpricefullday);
            cell4.appendChild(rezpricehalfday);
            cell5.appendChild(walkinhalfday);
            cell6.appendChild(walkinfullday);

            row.appendChild(cell1);
            row.appendChild(cell2);
            row.appendChild(cell3);
            row.appendChild(cell4);
            row.appendChild(cell5);
            row.appendChild(cell6);

            tblBody.appendChild(row); 
        }
         // div.setAttribute('class', 'note');
            // document.body.appendChild(div);

        tbl.appendChild(tblBody);
        body.appendChild(tbl);
        tbl.setAttribute('class', 'pricetable');
        cell5.setAttribute('class', 'tdcell');
        row.setAttribute('class','tablerow');
// KATHY YOU ARE GOING TO HAVE TO USE NTH CHILD TO STYLE THESE CELLS

        

    })