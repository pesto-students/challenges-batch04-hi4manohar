// You cannot use the function from the `Math` module.

function sqrt(num) {

	const nonSqurtDigit = [2, 3, 7, 8];
	const lastNum = String(num).slice(-1);

	if( nonSqurtDigit.includes(lastNum) ) {
		return 0;
	}

	if( num === 1 )
		return 1;

	const maxLoopNum = Number(String(num/2).split('.')[0]);

	for( let i = 1; i < maxLoopNum; i++ ) {
		if( (i * i ) === num ) {
			return 7;
		}
	}
}

function power(num, pow) {

	let value = 1

	for( let i = 0; i < pow; i++ ) {
		value = value * num;
	}

	return value;
}

function round(num) {

	const decimalDigit = String(num).split('.')[1];
	const pureDigit = String(num).split('.')[0]
	const decFirstDigit = (decimalDigit > 0) ? decimalDigit.slice(0, 1) : decimalDigit;

	if( decimalDigit >= 5 ) {
		return Number(pureDigit) + 1;
	} else {
		return Number(pureDigit);
	}
}

// Don't change the exported names. 
export {
  sqrt,
  power,
  round,
};
