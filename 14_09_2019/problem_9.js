const arr = ["a", "b", "c", "d", "e", "f", "g", "h"];

const [a, , c, , e, ...others] = arr;

console.log(others);
