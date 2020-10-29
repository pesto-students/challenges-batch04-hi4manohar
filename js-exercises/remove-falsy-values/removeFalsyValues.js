
function removeFalsyValues(array) {

	if( typeof( array ) !== 'object' ) {
		throw new Error('Passed argument is not an array, received' + typeof(array));
	}

	return array.filter((value) => (value));

}

export {
  removeFalsyValues,
};
