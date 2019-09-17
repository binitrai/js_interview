/*
f(1)(2)(3) // 9
f(2)(2)(1) // 4
f(2,2,1) // 4
f() // 0
https://www.youtube.com/watch?v=AUN84NApNjo
*/
function f(p, q, r) {
    if (p && q && r) {
        return (p + q) * r;
    } else if (p && q) {
        return function(r) {
            return (p+q) * r;
        }
    } else if (p) {
        return function(q) {
            return function(r) {
                return (p +q) * r;
            }
        }
    } else {
        return 0;
    }
}
