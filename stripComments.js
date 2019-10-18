// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"

function solution(input, markers) {

let finalArr= [];

let seperateByN = input.split('\n')

for ( let i = 0; i < seperateByN.length; i++) {
	
	let chars = seperateByN[i].split('');

	for ( let j = 0; j < chars.length; j++) {
	
		if ( chars[j] == markers[0] || chars[j] == markers[1]) {
			seperateByN.splice(i, 1, seperateByN[i].slice(0, j-1))
		}	
		else if ( !seperateByN[i].includes(markers[0])) {
				}
	}
}
return seperateByN.join('\n')
}


solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"])