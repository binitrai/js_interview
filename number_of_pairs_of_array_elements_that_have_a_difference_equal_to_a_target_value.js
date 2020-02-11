/*
You will be given an array of integers and a target value. 
Determine the number of pairs of array elements that have a difference equal to a target value.
*/

function getPair(list, k) {
    const map = new Map();
    list.forEach(item => map.set(item, true));
    let count = 0;
    map.forEach((val, key) => {
        if (map.has(k + key)) {
            count++
        }
    })
    return count;
}


/*
list  = 1 5 3 4 2  
k = 5 
output = 3

*/
