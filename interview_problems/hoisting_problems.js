//hoisting problems
/**********************************************************************/
//Problem -3

var bar = 1;
function foo() {  
	bar = 10;
	return bar;
  function bar() {}
}
foo();
console.log(bar);  //?1 


// You can ask the same question by moving function bar before return. 
//This will not change the op Also you can define some code in bar body. Op will be still unchanged.

/**********************************************************************/

//Problem -1:
function foo() {
  console.log(typeof foo);
}
var foo = 5;
foo(); //? Error that foo is not a function.


//problem -2
console.log(typeof foo) //? function
function foo(a, b) {
  return a+b;
}
var foo = 5;

//-------------------------------
var foo = 5;
function foo(a, b) {
  return a+b;
}
console.log(typeof foo) // ?number


//Problem 0
var a = 5
function foo() {  
  console.log(a);
  var a = 9;
} 
foo(); //?


/**********************************************************************/


//Problem 1:
console.log(y); //?
y = 1;
//-------------------
console.log(y); // ?
var y = 2;
//-------------------
y = 3;
console.log(y);  // ?
var y;


/**********************************************************************/

//Problem 2:
var z = 1;
let z;
console.log(z); //?

//-----------------
console.log(z); //?
let z = 1;


/**********************************************************************/

//Problem 3:

function a(){
  console.log("1")
}
a();  //?2
function a(){
  console.log("2")
}
a(); //?2


/**********************************************************************/


//Problem 4:
alert(a());  //?3
function a() {
  var b = function() {
    return 3;
  };
  return b();
  var b = function() {
    return 8;
  };
}
-------------------------
alert(a());  //?8
function a() {
  function b() {
    return 3;
  }
  return b();
  function b() {
    return 8;
  }
}

/*

Class declarations :
Much like their function counterparts, JavaScript class declarations are hoisted. 
However, they remain uninitialised until evaluation. 
This effectively means that you have to declare a class before you can use it.

https://scotch.io/tutorials/understanding-hoisting-in-javascript
*/

// https://www.freecodecamp.org/news/function-hoisting-hoisting-interview-questions-b6f91dbc2be8/
// https://medium.com/@pvivek4/hoisting-demystified-with-popular-interview-questions-38a93ea441ff


