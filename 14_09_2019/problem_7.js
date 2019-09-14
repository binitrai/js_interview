var obj = {
	p : 20,
	get__price: function() {
		console.log(this.p);
	}
}

var obj_1 = Object.create(obj);
obj_1.p = 50;

obj_1.get__price();