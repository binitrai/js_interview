import { worker } from "cluster";

let input = 

`chicken, 1, nonvegetarian, 50
beans, 1, vegetables, 20
beer, 4, alcoholic, 70
-
nonvegetarian, 10
vegetables, 5
alcoholic, 30`



// ans = 349



https://hackerearth.com/challenges/test/assessment-developer-feb-5-2020/

function main(input) {
    let breakPoint = input.indexOf("-");
    let taxMap = getTaxMap(input.substr(breakPoint + 1, input.length));
    let cart = getCart(input.substr(0, breakPoint));
    let price = getPrice(cart, taxMap);
    return price;
}


const getTaxMap = (taxStr) => {
    taxStr = taxStr.trim();
    let taxArr = taxStr.split("\n");
    return taxArr.reduce((a,c) => {
       c = c.trim();
       let item = c.split(",");
       a[item[0].trim()] = Number(item[1]);
       return a;
    }, {});
}

const getCart = cartStr => {
    cartStr = cartStr.trim();
    let cartArr = cartStr.split("\n");
    return cartArr.map(good => {
        let item = good.trim();
        item = item.split(",");
        return {
            item : item[0],
            qty : Number(item[1].trim()),
            catageory : item[2].trim(),
            price : Number(item[3].trim())
        }
    });
}

const getPrice = (cart, taxMap) => {
    return cart.reduce((a, c) => {
        let qty = c.qty;
        if (qty > 2) {
            qty = qty - parseInt(qty / 3);
        }
        let price = qty * c.price;
        price += price * (taxMap[c.catageory] / 100);
        return  a + price; 
    }, 0)
}

console.log(input) //?+


function main(input) {
    let breakPoint = input.indexOf("-");
    let cartStr = input.substr(0, breakPoint);
    cartStr = cartStr.trim();
    let cartArr = cartStr.split("\n");
    // parsing tax category
    let taxStr = input.substr(breakPoint + 1, input.length);
    taxStr = taxStr.trim();
    let taxArr = taxStr.split("\n");
    let taxMap = taxArr.reduce((a,c) => {
       c = c.trim();
       let item = c.split(",");
       a[item[0].trim()] = Number(item[1]);
       return a;
    }, {});
    
    // have to create a map on category

    cartArr = cartArr.map(good => {
        let item = good.trim();
        item = item.split(",");
        console.log(item);
        return {
            item : item[0],
            qty : Number(item[1].trim()),
            catageory : item[2].trim(),
            price : Number(item[3].trim())
        }
    });
    let totalPrice = cartArr.reduce((a, c) => {
        let qty = c.qty;
        if (qty > 2) {
            qty = qty - parseInt(qty / 3);
        }
        let price = qty * c.price;
        price += price * (taxMap[c.catageory] / 100);
        return  a + price; 
    }, 0)

    return totalPrice;
}

function q(str, k) {
    if (str.length < k) { 
        return 0;
    }
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let sa = str.charAt(i);
        for (let j = i + 1; j < str.length; j++) {
            sa += str.charAt(j);
            if (isPerfect(sa, k)) {
                count++;
            }
        }
    }
    return count;
}
function isPerfect(str, k) {
    const len = str.length;
    if (len % k !== 0) {
        return false;
    }
    if (len === k) {
        return [...new Set([...str])].length === 1;
    }
    let strMap = {};
    for (let i = 0; i < len; i++) {
        let c = str.charAt(i);
        if (typeof strMap[c] !== "undefined") {
            strMap[c] += 1;
        } else  {
            strMap[c] = 1;
        }
        if (strMap[c] > k) {
            return false;
        }
    }
    let ret = [...new Set(Object.values(strMap))];
    if (ret.length === 1 && ret[0] === k) {
        map.push(str);
        return true;
    }
    return false;
}

function p(str, k) {
    let len = str.length;
    if (len < k) { 
        return 0;
    }
    let count = 0;
    for (i = 0; i < len; i++) {
        let j = i + k - 1;
        while (j < len) {
            let subStr = str.substring(i, j+1);
            if (isPerfect(subStr, k)) {
                count++;
            }
            j += k;
        }

    }
    return count;
}

console.log(p("1102021222", 2) )// 6
console.log(q("1102021222", 2) )// 6
console.log(p("1020122", 2)) // 2
console.log(q("1020122", 2)) // 2
console.log(p("1221221121", 3))
console.log(q("1221221121", 3))









function arryConstruct(arr) {
    let col = arr.shift();
    let matrix = [];
    while(arr.length) {
        matrix.push(arr.splice(0, col))
    }
    return matrix;
}

function qParser(matrix, query) {
    return query.map(item => {
        return matrix[item[0] - 1][item[1]- 1];
    })
}
