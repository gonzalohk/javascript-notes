//ES6
const somethingWillHappen = () =>{
    return new Promise((resolve,reject) =>{
        if(true) {
            resolve('ok!');
        } else{
            reject('whoops!');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

const somethingWillHappen2 = () =>{
    return new Promise((resolve, reject)=>{
        if (true){
            setTimeout(()=>{
                resolve('TRUE')
            }, 2000)
        } else {
            const err = new Error('whoops!');
            reject(err);
        }
    });
}
somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));
//execute promises
Promise.all([somethingWillHappen(),somethingWillHappen2()])
    .then(response=>{
        console.log('Array of results ', response);
    })
    .catch(err => console.error(err));


//i.e. Promises

// Promises Implementation 
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();                 // Connection
        xhttp.open('GET', url_api, true);                   // HttpVerb, url, sync
        xhttp.onreadystatechange = (() => {                 // Call validation
          if(xhttp.readyState === 4){                       // Verify Completed Request
                (xhttp.status === 200)                      // Verify Status Code 200
                ? resolve(JSON.parse(xhttp.responseText))   // Send Response
                : reject( new Error('Error', url_api))      // Send Error      
          }
        });
        xhttp.send();
    });
}

/*
  1- Obtenemos la lista total de personajes de Rick And Morty, para mostrar el número total de personajes.
  2- Obtenemos la información del primer personaje (Rick), para mostrar el su nombre.
  3- Consultamos el location del personaje, para mostrar la dimensión a la cual pertenece.
*/

let API = 'https://rickandmortyapi.com/api/character/';
fetchData(API)
    .then(data=>{
        console.log(data.info.count);
        return fetchData(`${API}${data.results[0].id}`)        
    })
    .then(data=>{
        console.log(data.name);
        return fetchData(data.origin.url)
    })
    .then(data=>{
        console.log(data.dimension);
    })
    .catch(err => console.error(err));


