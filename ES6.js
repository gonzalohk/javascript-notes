// ES6 Ecmascript2015
// Default params
functionmyFunction(param1 = 'default', param2) { ... }

// Concatenación
let stringOne = 'what\'s up,';
let stringTwo = 'dude';
console.log(`${stringOne} ${stringTwo}`)// what's up, dude

//Let, const 
let variable1; // Block scope
const constant1; // Block scope and constant

//Multilinea
const stringMultiline = `This is a multi-
line string`;
console.log(stringMultiline);

//Spread Operator
const array = ['item1', 'item2'];
const array2 = ['item3', 'item4'];
const allArrays = [...array, ...array2] // ['item1', 'item2' , 'item3', 'item4']

//Destructuration
const object = {
	name: 'manuel',
	age: 24,
	country: 'PE',
};
const { name, age } = object; // 'manuel', 24

//Arrow functions
//const myFunction = (params) => { ... };
const square = num => num * num; // returns num * num
console.log(square(5))//25

//Parámetros en objetos
const name = 'manuel';
const age = 24,
const object = { name, age }; // { name: 'manuel', age: 24 }

//Promesas
const myPromise = () => newPromise((resolve, reject) => {
	if (success) { // Make some logic to capture when the promise have success
		return resolve(succesfullResponse);
	}
	return reject(failedResponse);
}
myPromise
	.then(response => doSomething)
	.catch(error => doSomethingWithError);

//Clases

class myClass{
	constructor(param1, param2) {
		this.param1 = param1;
		this.param2 = param2;
	}

	sum() {
		returnthis.param1 + this.param2
	}
}

const calc = new myClass(2, 2);
calc.sum(); // 4

//Generadores

function* myGenerator () {
	yield'Paradise';
	yield'city';
}

const generatorHello = myGenerator();
console.log(generatorHello.next());
console.log(generatorHello.next());
console.log(generatorHello.next());

/* { value: 'Paradise ', done: false }
{ value: 'city', done: false }
{ value: undefined, done: true } */

// FIBONACCI
function* fibonacci() {
    let a = -1;
    let b = 1;
    let fib;
    while (true) {
      fib = a+b;
      yield fib;
      a = b;
      b = fib;
    }
  }
  
  // Instanciamos el generador
 const fiboGenerator = fibonacci();
  
  // Obtenemos los primero 10 numeros de la serie de Fibonacci
  for (let i = 0; i < 10; i++) {
    console.log(`${i} -> ${fiboGenerator.next().value}`);
  }

//Módulos
// En module.js
const hello = () => console.log('Welcome to the jungle');
export default hello;

// En index.js
import hello from'./module.js';
hello(); // 'Welcome to the jungle'
