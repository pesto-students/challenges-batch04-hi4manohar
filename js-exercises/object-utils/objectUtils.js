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
		let returnedValue = fn([key, val]);
		newData[returnedValue[1]] = returnedValue[0];
	}

	return newData;

}

function merge() {

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
