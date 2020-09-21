// ES6 (Ecmascript 2015)
// Default params
function myFunction(param1 , param2= 'default') { return `${param1} ${param2}`}
console.log(myFunction("String example"));

//Concatenación
let stringOne = 'what\'s up,';
let stringTwo = 'dude';
console.log(`${stringOne} ${stringTwo}`)// what's up, dude

//Let, const 
let variableOne; // Block scope
const constantOne; // Block scope and constant

//Multilinea
const stringMultiline = `This is a multi-
line string`;
console.log(stringMultiline);

//Spread Operator
const array = ['item1', 'item2'];
const array2 = ['item3', 'item4'];
const allArrays = [...array, ...array2] // ['item1', 'item2' , 'item3', 'item4']
console.log(allArrays);

//Desestructuración
const object = {
	name: 'Gonzalo',
	age: 28,
	country: 'BO',
};
const { name, age } = object; // 'Gonzalo', 28

//Arrow function
//const myFunction = (params) => { ... };
const square = num => num * num; 
console.log(square(5)) //25

//Parámetros en objetos
const name = 'Gonzalo';
const age = 28;
const object = { name, age }; // { name: 'Gonzalo', age: 28 }

//Promises
const myPromise = new Promise((resolve, reject) => {
	if (success) { // Make some logic to capture when the promise have success
		return resolve(succesfullResponse);
	}
	return reject(failedResponse);
})
const doSomething= () => {console.log("Success")};
const doSomethingWithError= () => {console.log("Fail")};
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
		return this.param1 + this.param2
	}
}
const calc = new myClass(2, 2);
console.log(calc.sum()); // 4

//Generadores
function* myGenerator () {
	yield'Hi! ';
	yield'dude';
}
const generatorHello = myGenerator();
console.log(generatorHello.next());
console.log(generatorHello.next());
console.log(generatorHello.next());

//Generadores - Fibonacci
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
const fiboGenerator = fibonacci();//Instanciamos el generador
for (let i = 0; i < 10; i++) {//Obtenemos los primero 10 numeros de la serie
	console.log(`${i} -> ${fiboGenerator.next().value}`);
}

//Módulos
//En module.js
const hello = () => console.log('I am a function in module.js');
export default hello;
//En index.js
import hello from'./module.js';
hello(); //'I am a function in module.js'
