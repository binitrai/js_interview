/*
Implement compose/pipe function
Tests the coding style of the candidate (brownie points for functional and using reduce)
Can increase difficulty by adding async functions

*/

const getValue = (obj) => obj.value;
const add5 = (a) => a + 5; 
const mulBy5 = (a) => a * 5;
const sub5 = (a) => a - 5 


const val = {value : 5};

const output = sub5(mulBy5(add5(getValue(val)))) //  45

console.log(output);

const output1 = pipe(
    getValue,
    add5,
    mulBy5,
    sub5
)(val)

console.log(output1); // 45
