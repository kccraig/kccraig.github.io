// const requestURL = ;
// fetch(requestURL)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (jsonObject) {
//     console.table(jsonObject);
//     const towns = jsonObject['towns'];

//     for (let i = 0; i < towns.length; i++) {
//       console.log(towns[i].name);
//       if (towns[i].name == 'Preston') {
//         let eventinput = document.createElement('section');
//         for (let x = 0; x <= towns[i].events.length; x++) {

//           let p = document.createElement('p');
//           p.textContent = towns[i].events[x];
//           eventinput.appendChild(p);
//           document.querySelector('div.peventbox').appendChild(eventinput);
//         }

const requestURL = 'js/rentalprices.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject);
        const rentals = jsonObject['rentalpricechart'];
        console.log(rentals);
        for (let i = 0; i < rentals.length; i++) {
            // let scootcard = document.createElement('section');
let tablelements = document.createElement('table')
let tr1 = document.createElement('tr');
let td1 = document.createElement('td');

td1.textContent = "Reservations";
tablelements.appendChild(td1);




            document.querySelector('table.inputtable').appendChild(tablelements);

        }
        
    }
    )
    