/*Q.1 : Define a function ArrayAddition(arr) take the array of numbers stored in arr and return the string true if any comnination of numbers in the array exculding the largest number can be added up to the equal the largest number in the array, otherwise return the string false;
*/
function arrayAddition(arr) {
	let max = Math.max(...arr);
	let sum = arr.reduce((a,b)=> a+b);
	let res = (sum-max) -  max == 0 ? "TRUE" : "FAlse";
	return res;
}
/*
Question number 2 :
LetterCapitalize(str) take the str param being passed and capitalize the first letter of each word. Words will be seperated by only one space.
*/
function captialize(str) {
	let arr = str.split(" ");
	arr = arr.map(function(v) {
	   let f = v[0].toUpperCase();
	   return f + v.slice(1);
	});
	return arr.join(" ")
}

/*
Question number 3 :
LetterChange(str). Replace by the letter following, like a replace by b and z replaced by a;
then capitalize every vowel; and finally return the string.
*/

var charShift = function(str, amount) {
   // for the reverse process
	if (amount < 0){
		return caesarShift(str, amount + 26);
	}
	var output = '';
	//loop through each element
	for (var i = 0; i < str.length; i ++) {
		var c = str[i];

		// check if it is letter only
		if (c.match(/[a-z]/i)) {
		   // take the character code
			var code = str.charCodeAt(i);
			if ((code >= 65) && (code <= 90)) {
				c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
			}
			else if ((code >= 97) && (code <= 122)) {
				c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
			}

		}
		output += c;

	}
	output = output.replace(/[aeiou]/g, function(l) {
	   return l.toUpperCase();
	})
	return output;

};



