class Thing {
	constructor(array, weight) {
		this.array = array;
		this.weight = weight;
		this.picking = array.map(e => ({
			value: e,
			amount: 1
		}));
	}
	random(change) {
		let newArray = [];
		this.picking.forEach(e => {
			newArray = newArray.concat((new Array(e.amount)).fill(e.value))
		});
		let result = Math.floor(Math.random() * newArray.length);
		if(change) {
			this.picking.map((e, i) => ({
				value: e.value,
				amount: e.amount + (this.weight * (result != i))
			}));
		}
		return newArray[result];
	}
	clear() {
		this.picking.map(e => ({
			value: e.value,
			amount: 1
		}));
	}
}
