const sumAll = function(num1, num2) {
    
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    if (typeof(num1) !== "number" || 
        typeof(num2) !== "number") {
        return "ERROR";
    }
    
    let sum = 0;
    let smallerNumber,
        largerNumber;

    if (num1 > num2) {
        smallerNumber = num2;
        largerNumber = num1;
    } else {
        smallerNumber = num1;
        largerNumber = num2;
    }

    for (let i = smallerNumber; i <= largerNumber; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
