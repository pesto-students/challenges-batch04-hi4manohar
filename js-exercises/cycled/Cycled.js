
class Cycled {
	constructor(arr) {
		this.data = arr;
		this.currentIndex = 0;
	}

	current() {
		return this.data[this.currentIndex];
	}

	next() {
		this.currentIndex = this.currentIndex === 2 ? 0 : (this.currentIndex + 1);
		return this.data[this.currentIndex];
	}

	previous() {
		this.currentIndex = this.currentIndex === 0 ? 2 : (this.currentIndex - 1);
		return this.data[this.currentIndex];
	}

	step(step) {

		if( step > 0 ) 
			return this.data.slice( step, (step+1) )[0];
		else
			return this.data.slice( (step-1), step )[0] ;
	}

	get index() {
		return this.currentIndex;
	}

	set index(val) {
		val = Math.abs(val);
		if( val > 2 )
			this.currentIndex = (Math.ceil(val/3) -1);
		else
			this.currentIndex = val;
		return this.currentIndex;
	}

	reversed() {
		this.data.reverse();
		console.log(this.next.prototype);
		return this;
	}

	indexOf(val) {
		return this.data.indexOf(val);
	}
}

export { Cycled };
