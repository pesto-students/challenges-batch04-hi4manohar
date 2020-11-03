function dropElements(elements, predicate) {

	const newArray = [];
	for( let i = 0; i < elements.length; i++ ) {

		if( predicate(elements[i]) ) {
			newArray.push(elements[i]);
		}

	}

	return newArray;
}

export { dropElements };
