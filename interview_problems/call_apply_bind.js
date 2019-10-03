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


