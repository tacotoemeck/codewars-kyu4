function sumStrings(a,b) { 
    let result = [];
    let long = '';
    let short = '';
    if(a.length >= b.length) {
        long = a.split('').reverse();
        short = b.split('').reverse();
        }
        else {
        short = a.split('').reverse()
        long = b.split('').reverse();
        };

    result = sumDigits(short, long, result);
    
    return validateNumber(result);
    };

    function validateNumber(arr) {
        if(arr[0] == '0') {
            arr.shift();
            validateNumber(arr)
        };
        return arr.join('').toString();
    };

    function sumDigits(short, long, result) {
        let remainer = 0;
        for ( let i = 0; i < long.length; i++) {
            let numToInsert = '';
            let numA = Number(short[i]) || 0;
            let numB = Number(long[i]);
            let currentSum = (numA+ numB + remainer).toString() ;
    
            if(currentSum.length > 1) {
                numToInsert = currentSum[1];
                remainer = 1;
            } else {
                numToInsert = currentSum;
                remainer = 0;
            }
           result.unshift(numToInsert);   
        };
        if(remainer > 0) result.unshift(remainer);
        return result;
    };

   