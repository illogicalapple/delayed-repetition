class Thing {
	constructor(array, weight) {
		this.array = array;
		this.weight = weight;
		this.picking = array.map(e => {
			value: e,
			amount: 1
		});
	}
	random(change) {
		let result = Math.floor(Math.random() * this.picking.length);
		let newArray = [];
		if(change) {
			this.picking.map((e, i) => {
				value: e.value,
				amount: e.amount + (this.weight * (result != i))
			});
		}
		return picking.map(e => )[result];
	}
	clear() {
		this.picking.map(e => {
			value: e.value,
			amount: 1
		});
	}
}
