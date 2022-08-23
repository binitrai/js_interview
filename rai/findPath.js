/*
- Write method findPath
- Should take two params:
    - (param 1) : obj : object
    - (param 2) : path : string (keys separated by dots as string)
- Return value if it exists at that path inside the object, else return undefined
*/

const findPath = (obj, path) => {
    //write your code
}



//testCase Set -1

const obj = {
    a: {
        b: {
            c: 12,
            j: false
        },
        k: null
    }
};


console.log(findPath(obj, 'a.b.c')); // 12
console.log(findPath(obj, 'a.b')); // {c: 12, j: false}
console.log(findPath(obj, 'a.b.d')); // undefined
console.log(findPath(obj, 'a.c')); // undefined
console.log(findPath(obj, 'a.b.c.d')); // undefined
console.log(findPath(obj, 'a.b.c.d.e')); // undefined
console.log(findPath(obj, 'a.b.j')); //false
console.log(findPath(obj, 'a.b.j.k')); //undefined
console.log(findPath(obj, 'a.k')); //null

//testCase set -2
const obj1 = {
    name: {
        fname: "raj",
        lname : "sharma"
    },
    email : "raj@mail.com",
    address : {
      state : {
        city : {
          town : {
            village : {
              street : {
                home : "myHome"
              }
            }
          }
        }
      }
    }
};

console.log(findPath(obj1, 'name.fname')); // "raj"
console.log(findPath(obj1, 'name.lname')); // sharma
console.log(findPath(obj1, 'a.b.d')); // undefined
console.log(findPath(obj1, 'email')); // raj@mail.com
console.log(findPath(obj1, 'address.state.city.town.village.street.home')); // myHome
console.log(findPath(obj1, 'address.home')); // undefiende
