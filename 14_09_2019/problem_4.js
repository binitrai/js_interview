class Person {
	constructor() {
		this.name = "Virat";
	}
}

Person = class AnotherPerson {
	constructor() {
		this.name = "Sachin";
	}
}

var p = new Person();
console.log(p.name);