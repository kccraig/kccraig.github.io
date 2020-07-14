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

const requestURL = 'js/city.list.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        console.log(jsonObject);
        alert('hi');
        // var list = jsonObject;
        // var i = 0;
        // for (i = 0; i < jsonObject.length; i++) {
        // if (list.name == "Cozumel") {
        //     document.querySelector('city').textContent = i;

        // }
    }
    })