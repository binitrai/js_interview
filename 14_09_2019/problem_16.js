let arr = Array(3);
arr[0] = "HI";
arr[2] = "Array";

let first = [];
let second = [];


for (var i = 0; i < arr.length; i++) {
	first.push(arr[i]);
}

arr.forEach(ele=> {
	second.push(ele);
})

console.log(first, second);