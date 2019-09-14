const foo = [1,2];
const bar = foo;
bar[1] = 3;
const zoo = [3,4];
const koo = [...zoo];
koo[0] = 5;
console.log(foo, bar, zoo);