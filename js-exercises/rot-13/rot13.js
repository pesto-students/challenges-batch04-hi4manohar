function rot13(args) {

	const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
		'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
	];

	let finalString = '';

	for( let i = 0; i < args.length; i++ ) {

		if( letters.includes(args[i]) ) {
			let charIndex = letters.indexOf(args[i]);

			let enCharIndex = ( charIndex + 13 ) < 26 ? ( charIndex + 13 ) : (charIndex + 13 - 26);
			finalString = `${finalString}${letters[enCharIndex]}`;
		} else {
			finalString = `${finalString}${args[i]}`;
		}
	}

  return finalString;
}

export {
  rot13,
};
