//hoisting problems
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


