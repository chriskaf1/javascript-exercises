const removeFromArray = function(inputArray) {
    let toRemove = []; 
    for (let i=1; i < arguments.length; i++) {
        toRemove[i-1] = arguments[i];
    } // create an array with all arguments
    for (let arg of toRemove) { // loop for every argument that exists
        let i = 0;
        while (i < inputArray.length) { 
            if (inputArray[i] === arg) {
                inputArray.splice(i, 1); // Remove  the item if it matches the argument
                // Syntax: splice(start, deleteCount, item1, item2, itemN) If you do not specify any elements, 
                // splice() will only remove elements from the array.
            } else { 
                i++;
            } // Only increase the counter if we're done with the whole array
        }
    }
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
