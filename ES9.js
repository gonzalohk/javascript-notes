//ES9 (Ecmascript2018)
//Spread en objetos (rest)
const data = {
	name: 'Gonzalo',
	age: 28,
	gender: 'M',
}
const { name, ...rest } = data;
console.log(rest); // { age: 28, gender: 'M' }

//Composición de objetos
const data = {
	name: 'Gonzalo',
	age: 28,	
	gender: 'M'
}
const additionalData = {
	country: 'BO',
	city: 'LP'
}
const person = {
	...data,
	...additionalData,
}
console.log(person);


//Finally en Promises
const coolSong = () => {
	return new Promise((resolve, reject) => {
		if (true) {
			return setTimeout(() => resolve('Welcome to the jungle'), 2000);
		}
		return setTimeout(() => reject('T.N.T.'), 5000);
	})
};
console.log('The coolest song is...');
coolSong()
	.then((song) => {
		console.log(song);
	})
	.catch((error) => {
		console.log(`Aparently something went wrong: ${error}`);
	})
	.finally(() => {
		console.log('Bye!');
	})


//Regex
const regex = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regex.exec('2020-06-02');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day); // 2020 06 02
