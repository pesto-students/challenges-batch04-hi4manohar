
function accessorProperties(...args) {

	return {

		tempNumber: '',

		set number(number){
			this.tempNumber = number
		},
		get number() {
			return Number((this.tempNumber).toString(2));
		}
	}
}

export {
  accessorProperties,
};
