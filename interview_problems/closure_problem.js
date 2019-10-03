/*
Write a function that would allow you to do this.

foo(1)(2)(3) // 9
foo(2)(2)(1) // 4
foo(2,2,1) // 4
foo() // 0

*/


/*
Write a function that would allow you to do this.

add(1)(2) // 3

*/


//what will the following code output?
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 3000);
}

// Why? And how can you solve this problem?

//How would you use a closure to create a private counter?

