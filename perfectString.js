const handeler = {
    get : function(obj, prop) {
    return obj[prop] === undefined ? 0 : obj[prop];
    }
};

function solution(s, k) {
    let count = 0;
    let length = 0;
    let pos = 0;
    let map = {};
    let m = new Proxy(map, handeler);
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i);
        m[char] ++;
        length ++;
        if (length > k) {
            m[pos++]--;
            length--;
        }
        if (length === k && m[char] === length) {
            count++;
        }
    }
    return count;
}
