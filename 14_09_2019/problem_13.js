var a = null;
var b;

while (a == b) {
	a++;
	b++;
	if (a == b) {
		break;
	}
}

console.log(a);
console.log(b);


// Learning : null == undefiend => true;