const doSomethingAsync = ()=>{
    return new Promise((resolve, reject) =>{
        (true)
        ? setTimeout(()=>resolve('Do Something Async'), 3000)
        : reject (new Error('Test Error'))
    });
}

//i.e. 1
const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}
console.log('Before');
doSomething()
console.log('After');

//i.e. 2
const anotherFunction = async ()=>{
    try{
        const something1 = await doSomethingAsync();
        console.log(something1);
    }
    catch (err){
        console.error(err);
    }
}

console.log('Before1');
anotherFunction();
console.log('After1');

//i.e. Async/Await

// Async/Await Implementation
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
const API = 'https://rickandmortyapi.com/api/character/';
const rickAsyncData = async (url_api) =>{
    try{
        const data = await fetchData(url_api);
        const character = await fetchData(`${API}/${data.results[0].id}`);
        const origin = await fetchData(character.origin.url);
        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);  
    } catch(err){
        console.error(err);
    }
}
rickAsyncData(API);


//ALL at same time
/*async function foo() {
	const [characters , episodes, locations] = await Promise.all([
		getCharacters(),
		getEpisodes(),
		getLocations(),
	])

	console.log(characters)
	console.log(episodes)
	console.log(locations)
}*/