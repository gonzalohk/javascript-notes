//ES8 (Ecmascript 2017)
//async y await
const coolSong = (iAmABadass) => {
	return newPromise((resolve, reject) => {
		if (iAmABadass === true) {
			return setTimeout(() => resolve('Welcome to the jungle'), 2000);
		}
		return setTimeout(() => reject('All about that bass'), 2000);
	})
};
const coolSongAsync = async (iAmABadass) => {
	const cool = 'The coolest song is...';
	console.log(cool);
	try {
		const song = await coolSong(iAmABadass);
		console.log(song);
	} catch (error) {
		console.log(`Aparently something went wrong: The result is ${error}`);
	}
};

coolSongAsync(true); // The coolest song is... Welcome to the jungle

//Object.entries
const data = {
	name: 'Manuel',
	age: 24,
	rocks: true,
};

const entries = Object.entries(data);
console.log(entries); // [ [ 'name', 'Manuel' ], [ 'age', 24 ], [ 'rocks', true ] ]

//Object.values
const data = {
	name: 'Manuel',
	age: 24,
	rocks: true,
};
const entries = Object.values(data);
console.log(entries); // [ 'Manuel', 24, true ]

//PadStart
const string = 'hi';
const theWitcher = string.padStart(6, '666666'); 
console.log(theWitcher); // 'wild hunt'

//PadEnd
const string = 'hi';
const theWitcher = string.padEnd(9, 'gon');
console.log(theWitcher); // 'the wild hunt'

//Si se especifican más o menos caracteres, 
//el string original se mantiene y el segundo se repite hasta completar 
//los caracteres o se corta dependiendo del caso
// Ecmascript 8 también introduce las trailing commas 😃



var totn_string = 'TechOnTheNet';

console.log(totn_string.padStart(2,'A'));
console.log(totn_string.padEnd(2,'A'));