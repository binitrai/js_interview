/*Call By Reference Problem :*/

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



/*
    polyfill for object map
*/

const dbl = item => item * 2;

const arr = [1,2,3];
const dblArr = arr.map(dbl) // [2, 4, 6];

const obj = {
    a : 1,
    b : 2,
    c : 3
}

const dblObj = obj.map(dbl) 
console.log(dblObj) // {a : 2, b : 4, c : 6}


/*
Hoisting question
*/

var bar = 1;
function foo() {  
    bar = 10;
    return bar;
    function bar() {
        return true;
    }
}
foo();
console.log(bar);  // ?


/*Call Apply and Bind :*/


function add() {
  return this.a + this.b
}

/*
Now you have to use this function to add two numbers.
*/

function f() {
  console.log(this.name);
}

f = f.bind( {name: "John"} ).bind( {name: "Ann" } );

f(); // ? 


/*Event Handelling question


<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
<style>
#Card_1, #Card_2 {
	padding : 20px;
    border :  1px solid;
    margin: 10px;
}
p {
  border : 1px solid;
  padding : 10px;
  margin : 10px;
}
</style>
</head>
<body>


<div onclick="clickhandeler(event)" id="Card_1">
    <b>Card 1</b>
    <p id="p1">clcik me p1</p>
    <p id="p2">clcik me p2</p>
</div>

<div onclick="clickhandeler(event)" id="Card_2">
    <b>Card 2</b>
    <section id="mainSection">
      <p id="p3">clcik me p3</p>
      <p id="p4">clcik me p4</p>
    </section>
</div>


<script>
function clickhandeler (event) {
    // alert the id of the element where event occured // p1
    // alert the id of the element where event handelled // Card_1
}
</script>

</body>
</html>

*/



/*
<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
<style>
	.parent {
       
     }
    .left {
       
    }
    .right  {
     
    }
    
    .rightTop {
    	
        
    }
    
    .rightBottom  {
    
    }
</style>
</head>
<body>
<div class="parent">
	<div class="left">
    	<p>Some Content</p>
        <p>Some Content</p>
        <p>Some Content</p>
        <p>Some Content</p>
        <p>Some Content</p>
        <p>Some Content</p>
    </div>
    <div class="right">
    	<div class="rightTop">
           B
    	</div>
        <div class="rightBottom">
        	C
    	</div>
    </div>
</div>

</body>
</html>

<style>
	.parent {
       display : flex;
       border : 1px solid;
     }
    .left {
       flex : 1;
       border : 1px solid;
    }
    .right  {
      flex : 1;
      border : 1px solid;
      display : flex;
      flex-direction : column;
    }
    
    .rightTop {
    	border : 1px solid;
        flex : 1;
        display : flex;
        align-items: center;
        justify-content: center;
        
    }
    
    .rightBottom  {
    	border : 1px solid;
        flex : 1;
        display : flex;
        align-items: center;
        justify-content: center;
    }
</style>
*/


const chai = require('chai');
const assert  =  chai.assert;

function parseInput(str) {
  
}






assert.deepEqual(parseInput("1"), [1]); 
assert.deepEqual(parseInput("1,2"), [1,2]); 
assert.deepEqual(parseInput("1-5"), [1,2,3,4,5]); 
assert.deepEqual(parseInput("1-3,5-10"), [1,2,5,6,7,8,9,10]); 

console.log("---All test cases passed---");





const chai = require('chai');
const assert  =  chai.assert;

/*
You will be given an array of integers and a target value.
Determine the number of pairs of array elements that have a difference equal to a target value.

*/

function findPairs(list, k) {

}


assert.equal(findPairs([1,5,3,4,2], 2), 3);
assert.equal(findPairs([1,3,5,8,6,4,2], 2), 5);
assert.equal(findPairs([363374326, 364147530, 61825163, 1073065718, 1281246024, 1399469912, 428047635, 491595254, 879792181, 1069262793], 1), 0)
console.log("---All test cases passed---");
