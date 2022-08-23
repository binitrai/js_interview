/**
 * Implement Array.myReduce
 */

// TestCases :

const testArr = [1,2,3];

console.log("\n----Testcase 1--- op : 10---\n")
console.log(testArr.myReduce((acc, curr) => acc + curr, 4)); // 10


console.log("\n----Testcase 2--- op : 6---\n")
console.log(testArr.myReduce((acc, curr) => acc + curr)); // 6


console.log("\n----Testcase 3--- op : 6---\n")
console.log(testArr.myReduce((acc, curr) => acc * curr)) // 6


console.log("\n----Testcase 4--- op : 0---\n")
console.log(testArr.myReduce((acc, curr) => acc * curr, 0)); // 0


const testArr2 = [{a: 1}, {b: 2}];
const retObj  = testArr2.myReduce((acc, curr) => {
  let key = Object.keys(curr)[0];
  let val = Object.values(curr)[0];
  acc[key] = val; 
  return acc;
}, {});

console.log("\n----Testcase 5--- op : {a : 1, b :2}---\n\n")
console.log(retObj);
