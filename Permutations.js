// In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

// Examples:

// permutations('a'); // ['a']
// permutations('ab'); // ['ab', 'ba']
// permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// The order of the permutations doesn't matter.



function permutations(string) {
    let result = [];

    if ( string.length == 0 ) {
        result.push(string);
        return result;
    }
    for ( let i = 0; i< string.length; i++) {
        let firstChar = string[i];
        let remainingChars = string.substring(0,i) + string.substring(i + 1);
        let innerPermutations = permutations(remainingChars);
        for (let j = 0; j < innerPermutations.length; j++) {
            let newStr = firstChar + innerPermutations[j];
            if ( !result.includes(newStr) ) {
            result.push(newStr);
            }
        }
    }
    return result;
};

permutations('aabb')