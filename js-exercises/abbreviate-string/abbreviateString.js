import { isString } from "util";

function abbreviateString(str) {

	if( !isString(str) ) {
		throw 'Not a string';
	}

	const splitStr = str.split(' ');

	const lastStr = splitStr.length >= 2 ? splitStr[splitStr.length - 1] : '';

	const firstCharFromLastStr = lastStr && lastStr.length > 0 ? lastStr.slice(0, 1).toUpperCase() + '.' : '';

	const firstStr = splitStr[0];

	return firstStr + ' ' + firstCharFromLastStr;

}

export { abbreviateString };
