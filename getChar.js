function getChar(digits, i, n, str, res) {
	if (i == n) {
        res.push(str);
		return;
    }
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let sum = 0;
	for (var j = i; j <= Math.min(i + 1, n - 1); j++) {
		sum = (sum * 10) + digits[j];
		if (sum <= 26) {
            getChar(digits, j + 1, n, str + alphabet[sum - 1], res);
        }	
	}
}

function main(digits) {
    n = digits.length;
    let res = [];
	getChar(digits, 0, n, "", res);
	return res;
}
