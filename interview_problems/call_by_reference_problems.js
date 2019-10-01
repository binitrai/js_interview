function doubleArray(arr) {
   for (let i in arr) {
     arr[i] = arr[i] * 2; 
  }
  return arr;
}

const a1 = [2,3,4,5];
const a2 = doubleArray(a1);

let sum = a1[0] + a2[0];
console.log(sum) ///?
