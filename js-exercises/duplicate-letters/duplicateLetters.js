
function duplicateLetters(...args) {

	let letterArray = args[0].split("");

	let uniqueValues = letterArray.filter((item, i, ar) => ar.indexOf(item) === i);

	if( uniqueValues.length === letterArray.length ) {
		return false;
	}

	let countArr = [];

	let u, l;

	for( u = 0; u < uniqueValues.length; u++ ) {

		let appear = 0;

		for ( l = 0; l < letterArray.length; l++) {
	    if( uniqueValues[u] === letterArray[l] ) {
	    
	    	appear += 1;
	    }
	  }

	  countArr.push(appear);
	}

	return Math.max(...countArr);
}

export {
  duplicateLetters,
};
