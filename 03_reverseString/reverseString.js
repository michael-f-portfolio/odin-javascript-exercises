const reverseString = function(string) {
    let newString = "";

    for(let i = 0; i <= string.length; i++) {
        let charToAppend = string.length - i;
        newString = newString.concat(string.charAt(charToAppend)); 
    }

    return newString;
};

// Do not edit below this line
module.exports = reverseString;
