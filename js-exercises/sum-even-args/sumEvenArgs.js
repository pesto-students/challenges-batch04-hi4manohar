const sumEvenArgs = (...args) => {

	let sum = 0;

	for( let num of args ) {
		sum += ( num % 2 === 0 ) ? num : 0;
	}

	return sum;
};

export { sumEvenArgs };
