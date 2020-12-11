//i.e. 1
//callback
function sum(a,b){
    return a + b;
}
//high-order function
function calc(a,b,callback){
    return callback(a,b);
}
console.log(calc(1,6,sum));

//i.e. 2
function date(callback){
    console.log(new Date);
    setTimeout(()=>{
        let date = new Date;
        callback(date);
    }, 3000);
}
function printDate(dateNow){
    console.log(dateNow);
}
date(printDate);

//i.e. Callback

// Callback implementation
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
function fetchData(url_api, callback){
  let xhttp = new XMLHttpRequest();                       // Connection
  xhttp.open('GET', url_api, true);                       // HttpVerb, url, sync
  xhttp.onreadystatechange = (event) => {                 // Call validation
    if(xhttp.readyState === 4){                           // Verify completed request
      if(xhttp.status === 200){                           // verify status code 200
         callback(null, JSON.parse(xhttp.responseText));  // Execute callback and send error and response parameters
      } else {
        let error = new Error('Error: ' + url_api);
        return callback(error, null);                     // Send error
      }
    }
  }
  xhttp.send();
}

/*
  1- Obtenemos la lista total de personajes de Rick And Morty, para mostrar el número total de personajes.
  2- Obtenemos la información del primer personaje (Rick), para mostrar el su nombre.
  3- Consultamos el location del personaje, para mostrar la dimensión a la cual pertenece.
*/

let API = 'https://rickandmortyapi.com/api/character/';

fetchData(API, (error1, data1) => {
  if(error1) return console.error(error1);  
  fetchData(API + data1.results[0].id, (error2, data2) => {
    if(error2) return console.error(error2);
    fetchData(data2.origin.url, (error3, data3) => {
      if(error3) return console.error(error3);     

      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);          
    });
  });
});