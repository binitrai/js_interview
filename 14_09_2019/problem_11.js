/*
what is the logged output if every statement is executed step by step;
*/
var a = {a : 1, d : 2};
console.log(b.a);

var b = Object.create(a);
var c = Object.create(b);

b.a = 5;

console.log(b.a);
console.log(c.a);
console.log(c.d);

b.__proto__ = c;

console.log(c.d);