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

function all() {

}

function some() {

}

export {
  map,
  filter,
  invert,
  merge,
  all,
  some,
};
