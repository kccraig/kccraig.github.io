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

        var row1 = document.createElement('tr');

        var cella = document.createElement('td');
        var  space= document.createTextNode("  ");
        
        var cellb= document.createElement('td');
        var namev= document.createTextNode("Type of vehicle");

        var cellc= document.createElement('td');
        var maxp = document.createTextNode("Max People");

        var celld= document.createElement('td');
        var rez = document.createTextNode("Rezervation Fee");
        var celle= document.createElement('td');
        var space = document.createTextNode("  ");

        var cellf= document.createElement('td');
        var walk = document.createTextNode("Walk-In Fee");
        var cellg= document.createElement('td');
        var space = document.createTextNode("  ");

        cella.appendChild(space);
        cellb.appendChild(namev);
        cellc.appendChild(maxp);
        celld.appendChild(rez);
        celle.appendChild(space);
        cellf.appendChild(walk);
        cellg.appendChild(space);
        

        row1.appendChild(cella);
        row1.appendChild(cellb);
        row1.appendChild(cellc);
        row1.appendChild(celld);
        row1.appendChild(celle);
        row1.appendChild(cellf);
        row1.appendChild(cellg);


        tblBody.appendChild(row1);
        
        var row1 = document.createElement('tr');

       
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

            
            let image = document.createElement('img');
            image.setAttribute('src', rentals[i].imageurl);
            image.setAttribute('alt', rentals[i].name);
            

            cell1.appendChild(name);
            cell2.appendChild(maxper);
            cell3.appendChild(rezpricefullday);
            cell4.appendChild(rezpricehalfday);
            cell5.appendChild(walkinhalfday);
            cell6.appendChild(walkinfullday);
            row.appendChild(image);
            row.appendChild(cell1);
            row.appendChild(cell2);
            row.appendChild(cell3);
            row.appendChild(cell4);
            row.appendChild(cell5);
            row.appendChild(cell6);

            tblBody.appendChild(row);
        }
   
        tbl.appendChild(tblBody);
        body.appendChild(tbl);
        cella.setAttribute('class','double');
        celld.setAttribute('class','double');
        celle.setAttribute('class','double');
        row1.setAttribute('class','double');
        tbl.setAttribute('class', 'pricetable');
        cell5.setAttribute('class', 'tdcell');
       

        // KATHY YOU ARE GOING TO HAVE TO USE NTH CHILD TO STYLE THESE CELLS



    })