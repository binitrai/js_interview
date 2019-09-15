/*
Write an implementation of a function 'callAfter' that enables Any function to be called after some specified duration.
The o/p of the function should remain the same. the function should have following syntax

  let say you have a function:

  function sum (a, b) { 
	console.log(a + b);
  } 
  Now call like sum.callAfter(1000, 5,10) => should invoke function sum after 1000 ms with param 5 and 10.
*/

Function.prototype.callAfter = function(delay, ...args) {
   var fn = this;
   setTimeout(function() {
	fn.apply(fn, args);	
   }, delay)

};
