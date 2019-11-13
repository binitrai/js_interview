/*Pills of a color
You’re given a multi-layered rack in the form of a grid with m rows and n columns. Each cell is occupied either by a red pill (marked by r), a blue pill (marked by b). The objective is to find whether no pills of the same color are adjacent to each other. Adjacency is assumed horizontal and vertical only. So any cell can be adjacent to at the most 4 cells.

Input Format
The first line contains a single integer t, denoting the number of test cases.
The first line of each test case contains two space separated integers m and n denoting the number of rows and number of columns in the grid respectively. Following m lines each contains n elements.

Output Format
For each test case if no two pills of the same color are adjacent to each other, then print 1 else print 0.

Constraints
1 <= t <= 1000
1 <= m <= 100
1 <= n <= 100

Sample Input
3
2 2
rb
br
1 2
rr
2 1
b
b

Sample Output
1
0
0
*/

function getResult(m, n, list) {
	if (m === 1 && n === 1) {
		return 1;
	}

	if (m === 1 & n !== 0) {
		for (let i = 0; i < list.length - 1; i++) {
			if (list[i] === list[i+1]) {
				return 0
			}
		}
		return 1;
	}

	if (m > 1) {

		for (let i = 0; i < m -1; i++) {
			if (n === 1) {
				if (list[i][0] === list[i+1][0]) {
					return 0;
				}
			}
			for (let j = 0; j < n-1; j++) {
				if (list[i][j] === list[i][j+1] || list[i][j] === list[i+1][j]) {
				   return 0
				}
			}
		}
			
		return 1;
	}

	
}


function main(input) {
  const lines = input.split("\n");
  var t = Number(lines[0]);
  var x = 1;
  while(x < lines.length) {

  	var mn = lines[x].split(" ");
  	var m = Number(mn[0]);
  	var n = Number(mn[1]);
  	var list = [];
  	if (m === 1) {
  		list = lines[x+1].split("");
  	} else {
  		for (let i = x+1; i <= x+m; i++) {
  			list.push(lines[i].split(""));
  		}
  	}

  	x = x + m + 1;

  	var result = getResult(m,n, list);
  	process.stdout.write(result.toString());
    process.stdout.write("\n");
  }

}



















