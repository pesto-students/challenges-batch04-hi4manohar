const deepCopyObject = objToCopy => {

	const newObj = {};


	if( typeof( objToCopy ) !== 'object' || objToCopy === null ) {
		return objToCopy;
	}

	for( const key in objToCopy ) {
		newObj[key] = deepCopyObject(objToCopy[key]);
	}

	return newObj;


};

export { deepCopyObject };
