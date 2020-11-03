function chunkArrayInGroups(array, chunkSize) {

	const chunkArray = [];

	const loopCount = Math.ceil(array.length / chunkSize);

	for( let i = 0; i < loopCount; i++ ) {
		chunkArray.push(array.splice(0, chunkSize))
	}

	return chunkArray;

}

export {
  chunkArrayInGroups,
};
