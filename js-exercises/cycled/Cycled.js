class Cycled extends Array{
	constructor(arr) {
		super(...arr);
	  this.data = arr;
	  this.currentIndex = 0;
	}
  
	current(x) {
	  return this.data[this.currentIndex];
	}
  
	next() {
	  this.currentIndex =
		this.currentIndex === this.data.length - 1 ? 0 : this.currentIndex + 1;
	  return this.data[this.currentIndex];
	}
  
	previous() {
	  this.currentIndex =
		this.currentIndex === 0 ? this.data.length - 1 : this.currentIndex - 1;
	  return this.data[this.currentIndex];
	}
  
	step(step) {
	  if (step > 0) return this.data.slice(step, step + 1)[0];
	  else return this.data.slice(step - 1, step)[0];
	}
  
	get index() {
	  return this.currentIndex;
	}
  
	set index(val) {
	  val = Math.abs(val);
	  if (val > 2) this.currentIndex = Math.ceil(val / 3) - 1;
	  else this.currentIndex = val;
	  return this.currentIndex;
	}
  
	get reversed() {

		const ref = this;
		return function* revGenerator() {
			while(true) {
				yield ref.previous();
			}
		}
	}

	*[Symbol.iterator]() {
		let length = this.data.length - 1;
	
		while (length >= 0) {
		  yield this.current();
		  this.index = this.currentIndex + 1;
		  length -= 1;
		}
	  }
  
	indexOf(val) {
	  return this.data.indexOf(val);
	}
  }

export { Cycled };
