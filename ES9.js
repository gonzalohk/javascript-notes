Ecmascript 9
Spread en objetos (rest)

const data = {
	name: 'Manuel',
	age: 24,
	rocks: true,
}

const { name, ...rest } = data;
console.log(rest); // { age: 24, rocks: true }
Composición de objetos

const data = {
	name: 'Manuel',
	age: 24,
	rocks: true,
}

const additionalData = {
	country: 'PE',
	city: 'Trujillo',
}

const person = {
	...data,
	...additionalData,
}
console.log(person);

/* {
  name: 'Manuel',
  age: 24,
  rocks: true,
  country: 'PE',
  city: 'Trujillo'
} */
Finally en promesas

const coolSong = (iAmABadass) => {
	returnnewPromise((resolve, reject) => {
		if (iAmABadass === true) {
			return setTimeout(() => resolve('Welcome to the jungle'), 2000);
		}
		return setTimeout(() => reject('All about that bass'), 2000);
	})
};

console.log('The coolest song is...');

coolSong(true)
	.then((song) => {
		console.log(song);
	})
	.catch((error) => {
		console.log(`Aparently something went wrong: The result is ${error}`);
	})
	.finally(() => {
		console.log('They are all good songs :D');
	})

/* The coolest song is...
Welcome to the jungle
They are all good songs :D */
Regex

const regex = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regex.exec('2020-06-02');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day); // 2020 06 02
