// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
// This image will illustrate things more clearly:


// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as [[]]



let snail = function(arr) {
  let result = [];
  
  while(arr.length > 0) {
    result = result.concat.apply(result, arr.splice(0, 1));
    
    for(let i = 0; i < arr.length; i+=1) {
      result = result.concat(arr[i].splice(arr.length));
    }
    
    let temp = [].concat.apply([], arr.splice(arr.length-1)).reverse();
    result = result.concat.apply(result, temp);
    
    for(let i = arr.length-1; i >= 0; i-=1) {
      result = result.concat(arr[i].splice(0, 1));
    }
  }
  
  return result;
}


// below works but doesn't pass tests:
let result = [];

function snail(arr) {
	

	if ( arr.length == 0) return result

	if ( arr.length == 1) {
		result.push(arr[0])
		return result.flat()
	}

	let arrCopy = arr;
	let columns = arr[0].length;
	let lastIndex = columns-1;
	let firstRow = arr[0];
	let lastRow = arr[lastIndex];
	let middlesNum = columns - 2;
	
	// first arr 
	result.push(arr[0])
	arrCopy.shift()
	
	// create a for loop in case there's more than one middle here

	for ( let i = 0; i < middlesNum; i++) {
		result.push(arr[i][lastIndex])
		arrCopy[i].pop()
	}
	// last reveresed and pushed
	
	let lastArr = lastRow.reverse();
	result.push(lastArr)
	arrCopy.pop();
	// push first chars of middles 
	
if ( arr.length > 1 ) {
	for ( let i = arr.length-1; i >= 0; i--) {
	result.push(arr[i][0])
	arrCopy[i].shift()
	}
}
	if ( arr.length >= 1 ) {
		snail(arr)
	}
return result.flat()
}




snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]])