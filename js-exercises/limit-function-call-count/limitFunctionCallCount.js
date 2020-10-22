const limitFunctionCallCount = (cb, times) => {

	var initialTimes = 0;

	return ((x, y, z) => {

		if( times === initialTimes ) {
			return null;
		}

		initialTimes += 1;

		return cb(x, y, z);
	})

};

export {
  limitFunctionCallCount,
};
