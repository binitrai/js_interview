// Simple approach
async function sqr(start, end) {
    let res = [];
    for (let i = start; i < end; i++) {
       let url = 'https://api.mathjs.org/v4/?expr='+ i + '*' + i;
       let r = await fetch(url);
       let data = await r.json()
       res.push(data);
    }
    return res;
}

let res = sqr(1, 5);

res.then(val => console.log(val));


// simplfied approach 

async function sqr(start, end) {
    let urls = [];
    for (let i = start; i < end; i++) {
       urls.push('https://api.mathjs.org/v4/?expr='+ i + '*' + i);
    }
    return urls.map(async item => {
        return await fetchData(item);
    });
}

async function fetchData (url)  {
    let r = await fetch(url);
    let data = await r.json();
    return data;
}

let res = sqr(1, 5);
res.then(val => console.log(val));



// using promise.all

const getUrls = (start, end) => {
    return Array.from({length: (end - start + 1)}, (_, i) => {
        let v = start + i;
        return fetchData('https://api.mathjs.org/v4/?expr='+ v + '*' + v);
    })
}

async function fetchData (url)  {
    let r = await fetch(url);
    let data = await r.json();
    return data;
}

ll = getUrls(1,5);
Promise.all(ll).then(resp => resp.forEach(res => console.log(res)));




// // jio hangout call
// HI


// https://api.mathjs.org/v4/?expr=2*2

const square = (start, stop)=> {
    let urls;
    rest API
    cons
    for(let i =start; i<=stop; i++){
        urls.push('https://api.mathjs.org/v4/?expr='+ i + '*' + i)
    }
    Promise.allSettled(url.map(item => fetch(item)))
    .then()
}
square(1, 100)


function fetch(url){
    return new Promise(function(resolve, reject){
        
    
    })
}


// -----------------------------

function partialize(fn, ...firstInput){

  return function(...secondInput){
      return fn.apply(null, [...firstInput, ...secondInput] );
  }
}

function calculation(a,b,c){
  console.log(a*b/c);
  return a*b/c;
}

var a = 10, b= 20, c= 5;

var partialize1 = partialize(calculation, a);
partialize1(b,c)

var partialize2 = partialize(calculation, a, b);
partialize2(c)

var partialize3 = partialize(calculation, a, b, c);
partialize3(a, b, c)





function foo(){} // foo()






var a = 10;
var b = a;
a = 20
console.log(b); // 10



var obj = {a:10};
var obj1 = obj;
var obj.a = 20;
console.log(obj1.a) //20


