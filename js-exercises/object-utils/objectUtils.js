// your implementation

function map(obj, fn) {

	let newData = {};
	for( const [key, val] of Object.entries(obj) ) {
		let returnedValue = fn([key, val]);
		newData[returnedValue[0]] = returnedValue[1];
	}

	return newData;
}

function filter(obj, fn) {

	let newData = {};
	for( const [key, val] of Object.entries(obj) ) {
		if(fn([key, val])) {
			newData[key] = val;
		}
	}

	return newData;
}

function invert(obj, fn) {

	let newData = {};
	for( const [key, val] of Object.entries(obj) ) {
		newData[val] = key;
	}

	return newData;

}

function merge(...args) {

	const newObj = {};

	for( let arg of args ) {
		for( const [key, val] of Object.entries(arg) ) {
			newObj[key] = val;
		}
	}

	return newObj;

}

function all(obj, fn) {

	let allStatus = true;

	for( const [, val] of Object.entries(obj) ) {
		if( fn(val) === false ) {
			allStatus = false;
		}
	}

	return allStatus;
}

function some(obj, fn) {

	let allStatus = false;

	for( const [, val] of Object.entries(obj) ) {
		if( fn(val) === true ) {
			allStatus = true;
		}
	}

	return allStatus;
	
}

export {
  map,
  filter,
  invert,
  merge,
  all,
  some,
};
