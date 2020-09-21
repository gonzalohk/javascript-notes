//ES8 (Ecmascript 2017)
//async y await
const coolSong = () => {
	return new Promise((resolve, reject) => {
		if (true) {
			return setTimeout(() => resolve('Welcome to the jungle'), 2000);
		}
		return setTimeout(() => reject('T.N.T.'), 5000);
	})
};
const coolSongAsync = async () => {
	const cool = 'The coolest song is...';
	console.log(cool);
	try {
		const song = await coolSong();
		console.log(song);
	} catch (error) {
		console.log(`Aparently something went wrong: ${error}`);
	}
};
coolSongAsync(); // The coolest song is... Welcome to the jungle

//Object.entries
const data = {
	name: 'Gonzalo',
	age: 28,
	rocks: 'M',
};
const entries = Object.entries(data);
console.log(entries); // [ [ 'name', 'Manuel' ], [ 'age', 24 ], [ 'rocks', true ] ]

//Object.values
const data = {
	name: 'Gonzalo',
	age: 28,
	gender: 'M',
};
const entries = Object.values(data);
console.log(entries); // [ 'Gonzalo', 28, 'M' ]

//PadStart
const string = 'hi';
const newString = string.padStart(5, 'X'); 
console.log(newString); // 'XXXhi'

//PadEnd
const string = 'hi';
const newString = string.padEnd(5, 'X');
console.log(newString); // 'hiXXX'

//Trailing commas
