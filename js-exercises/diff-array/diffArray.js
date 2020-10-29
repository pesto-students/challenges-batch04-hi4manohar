function diffArray(arrayOne, arrayTwo) {

	let filterOne = arrayOne.filter((arg) => !arrayTwo.includes(arg));
	let filterTwo = arrayTwo.filter((arg) => !arrayOne.includes(arg));

	return filterOne.concat(filterTwo);
  
}

export {
  diffArray,
};
