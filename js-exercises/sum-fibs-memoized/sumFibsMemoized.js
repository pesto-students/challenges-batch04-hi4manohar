function sumFibs(num) {

		if( num <= 2 ) {
			return 2;
		}

		var seriesNums = [1, 1];
		var oddSeriesSum = 2;

		let i = 0;

		for( i = 2; i <= num; i++ ) {

			var seriesNumbers = (seriesNums[seriesNums.length-1] + seriesNums[seriesNums.length-2]);

			if( i === seriesNumbers ) {
				if( i%2 == 1 ) {
					seriesNums.push(i);
					oddSeriesSum += i;
				} else {
					seriesNums.push(i);
				}
			}
		}

	  return oddSeriesSum;
  //
}

sumFibs(10);

function cacheFunction(sumFibs) {

	let cache = {};

	return((num) => {
		if( num in cache ) {
			return cache[num];
		} else {

			cache[num] = sumFibs(num);
			return cache[num];
		}
	})
}

export { sumFibs, cacheFunction };
