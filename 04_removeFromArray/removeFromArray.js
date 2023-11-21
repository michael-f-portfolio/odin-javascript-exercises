const removeFromArray = function(array, ...elementsToRemove) {
    let newArray = [];

    // Traverse the array to search
    for(let i = 0; i < array.length; i++) {
        let shouldRemoveElement = false;
        // For each element in the array search the entire arguments array
        for(let j = 0; j < elementsToRemove.length; j++) {
            if(array[i] === elementsToRemove[j]) {
                shouldRemoveElement = true;
            }
        }
        if(!shouldRemoveElement) {
            newArray.push(array[i]);
        }
    }


    // for(let i = 0; i < array.length; i++) {
    //     if(array[i] !== arguments[0]) {
    //         newArray.push(array[i]);
    //     }
    // }

    return newArray;
};

// removeFromArray([1, 2, 3, 4], 3, 2);

// Do not edit below this line
module.exports = removeFromArray;
