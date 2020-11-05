function updateInventory(inv, newinv) {

	const reverseInv = [];
	for( let i of inv ) {
		reverseInv.push(i.reverse())
	}
	const reverseNewInv = [];
	for( let i of newinv ) {
		reverseNewInv.push(i.reverse())
	}

	const entriesObj = Object.fromEntries( new Map(reverseInv) );
	const entriesObjNew = Object.fromEntries( new Map(reverseNewInv) );

	for( const [key, value] of  Object.entries(entriesObjNew) ) {
		entriesObj[key] = (key in entriesObj) ? value + entriesObj[key] : value;
	}

	const sortedObj = {};
	Object.keys(entriesObj).sort().forEach(function(key) {
		sortedObj[key] = entriesObj[key];
	})

	const objArrays = [];
	for(const [key, value] of Object.entries(sortedObj) ) {
		objArrays.push([value, key]);
	}

	return objArrays;
}

export {
  updateInventory,
};
