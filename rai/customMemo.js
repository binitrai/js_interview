function memoGenerator () {

  // implement your own memo
}



//testcases :
const area = a => a * a;
const sub = (a, b) => a -b;
const sum = (a, b) => a + b;
const arraySum = arr => arr.reduce((acc, curr) => acc + curr)



const memoArea = memoGenerator(area);
const memoSub = memoGenerator(sub);
const memoSum = memoGenerator(sum)
const memoArraySum = memoGenerator(arraySum)

console.log(memoArea(4)) // 16  // not from cache
console.log(memoArea(4)) // 16  // from cache
console.log(memoArea(3)) // 9  // not from cache
console.log(memoArea(4)) // 16  // From cache
console.log(memoArea(3)) // 9  // from cache

console.log(memoSub(4, 3)) // 1  // not from cache
console.log(memoSub(3, 4)) // -1  // not from cache
console.log(memoSub(4, 3)) // 1  // from cache
console.log(memoSub(3, 4)) // -1  // from cache


console.log(memoSum(4, 3)) // 7  // not from cache
console.log(memoSum(3, 4)) // 7  // not from cache
console.log(memoSum(4, 3)) // 7  // from cache
console.log(memoSum(3, 4)) // 7  // from cache


console.log(memoArraySum([1,2,3])) // 6 Not form cache
console.log(memoArraySum([1,2,3])) // 6 form cache
console.log(memoArraySum([2,3])) // 5 Not form cache
console.log(memoArraySum([2,3])) // 5  form cache
console.log(memoArraySum([1,2,3])) // 6 form cache



const addAll = (a,b,...rest) => {
let sum = a + b;
if (Array.isArray(rest)) {
  sum += rest.reduce((acc, curr) => acc + curr);
}
return sum;
}

const memoAddAll = memoGenerator(addAll);
console.log(memoAddAll(1,2,3,4,5,6,7)) // 28 not from cache

console.log(memoAddAll(1,2,3,4,5,6,7,8)) // 36 not from cache

console.log(memoAddAll(1,2,3,4,5,6,7)) // 28 from cache
console.log(memoAddAll(1,2,3,4,5,6,7,8)); //  from cache

const addKeys = obj => {
  return Object.keys(obj).reduce((acc, curr) => parseInt(acc) + parseInt(curr));
}

const memoAddKeys = memoGenerator(addKeys);
console.log(memoAddKeys({1:2, 2:3})) // 3 not from cache
console.log(memoAddKeys({4:2, 5:3})) // 9 not from cache
console.log(memoAddKeys({1:2, 2:3})) // 3 from cache
console.log(memoAddKeys({4:2, 5:3})) // 9 from cache
