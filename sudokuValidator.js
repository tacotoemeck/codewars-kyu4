function validSolution(board){

test1 = Boolean; 
test2 = Boolean;
test3 = true;
  
for ( let i = 0; i < board.length; i++) {
	let counter = 0;
	for ( let k = 0 ; k < board.length; k++) {
	counter+=Math.pow(2, board[i][k]-1)
	}
	if ( counter != 511 ) test1 = false;
}

if ( test1 == false ) {
	return false
}
else {

for ( let i = 0; i< board.length; i++ ) {
	testArr = [];
	
	for ( let k = 0 ; k < board.length; k++) {
		testArr.push(board[k][i])
	}
	let counter = 0;
	for ( let a = 0; a < testArr.length; a++) {
		counter+=Math.pow(2, testArr[a]-1)
		}
	if ( counter != 511 ) test2 = false;	
	}

}

if ( test2 == false ) {
	return false
}
else {
threeByThreeGridChecker(board, 0, 0, 3)

}
// return true

function threeByThreeGridChecker(arr, current, sliced, currentRow) {
	let sum = 0;
	if (currentRow > 9 ){ return true
	} else {
	let threeGrid =[ [arr[current].slice(sliced,currentRow)], [arr[current+1].slice(sliced,currentRow)], [arr[current+2].slice(sliced,currentRow)]];
	for ( let i = 0; i < threeGrid.length; i++) {
		
		count = 0;
		for ( let j =0; j < threeGrid[i].length;j++) {
			sum+= threeGrid[i][j].reduce((a,b)=>a+b)
			count++;
			if ( count == 3) {
				count = 0;
				sum = 0
			}
		}
	}
	console.log(sum)
if ( sum != 45) test3 = false
	
	
	// threeGrid = threeGrid.flat(3).reduce((a,b)=> a+b);
	// 
	threeByThreeGridChecker(arr, current+3, sliced+3, currentRow+3)
}

}
return test3
}
