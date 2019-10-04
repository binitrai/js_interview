/*
    Q1 : Can you name two common uses for closures?
    
    1. In JavaScript, closures are the primary mechanism used to enable data privacy. 
    When you use closures for data privacy, the enclosed variables are only in scope within the containing (outer) function. 
    You can’t get at the data from an outside scope except through the object’s privileged methods. 
    In JavaScript, any exposed method defined within the closure scope is privileged

    2. Closures can also be used to create stateful functions whose return values may be influenced by their internal state.

    3. In functional programming, closures are frequently used for partial application & currying.

    4. callbacks and as parameters to higher-order functions, like map/reduce/filter, that make list processing infinitely more readable.
    Read More : https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36
*/

/*
Q2: Definition of closure :
Ans : Closure is when a function is able to remember and access its lexical scope 
even when that function is executing outside its lexical scope.
*/


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

//Task :
/*
Your task is to fill in the blank (_______________________) spaces.
The multiplier function takes a single parameter,x , and returns an anonymous function that takes a single parameter,y , 
and returns the product of  x and y (i.e.: s*Y ).
*/
function multiplier(x) {
  //__________________________________________
}



