
function curry(func){

	return function returnMainCurry(...args) {

		if( args.length >= func.length  ) {
			return func.apply(this, args);
		} else {
			return function(...args2) {

				return returnMainCurry.apply(this, args.concat(args2));

			}
		}
	}
  
}

export {
  curry,
};
