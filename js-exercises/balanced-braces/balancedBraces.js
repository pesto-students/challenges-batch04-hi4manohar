/*

	@1: select first opening str and match with its closing str
	@2: keet track of all the openiing and closing str in between
	@3: if opening and closing matches and its number of opening and closing matches then 
		remove opening and closing.

	@4: keep it continue till then
		if opening gets 0
		or closing gets 0 OR
		number of opening and closing gets equal or zero

*/


const openingStr = ['(', '{', '['];
const closingStr = [')', '}', ']'];

function balancedBraces(strArr) {

	if(typeof(strArr) !== 'object') {
		strArr = strArr.split('');
	}

	let openingIndex = strArr.indexOf(openingStr[0]);
	openingIndex = openingIndex >= 0 ? openingIndex : strArr.indexOf(openingStr[1]);
	openingIndex = openingIndex >= 0 ? openingIndex : strArr.indexOf(openingStr[2]);

	//check if first str is opening
	if( !openingStr.includes(strArr[openingIndex]) ) {
		return true;
	}

	const closingStrFinder = closingStr[openingStr.indexOf(strArr[openingIndex]) ];

	//check if closing str exist
	if( !strArr.includes( closingStrFinder ) ) {
		return false;
	}

	let indexToRemove = '';
	let numOfOpening = [0, 0, 0];
	let numOfClosing = [0, 0, 0];

	for( let i = (openingIndex+1); i < strArr.length; i++ ) {

		if( closingStrFinder === strArr[i] && JSON.stringify(numOfOpening) == JSON.stringify(numOfClosing) ) {

			indexToRemove = i;
			break;
		}

		if( openingStr.includes(strArr[i]) ) {
			numOfOpening[ openingStr.indexOf(strArr[i]) ] += 1
		}

		if( closingStr.includes(strArr[i]) ) {
			numOfClosing[ closingStr.indexOf(strArr[i]) ] += 1
		}
		
	}

	if( JSON.stringify(numOfOpening) !== JSON.stringify(numOfClosing) ) {
		return false;
	}

	//return strings after removing 
	strArr.splice(openingIndex, 1);
	strArr.splice((indexToRemove-1), 1);

	if( strArr.length === 0 ) {
		return true;
	}
	return balancedBraces( strArr );
}

export {
  balancedBraces,
};
