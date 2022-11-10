// Sn = n(n+1)/2

const sumToNumber = function(num) {
    return num * (num+1) / 2;
}

const sumAll = function(numOne, numTwo) {
    if (numTwo < 0 || numOne < 0 || typeof(numTwo) !== "number" || typeof(numOne) !== "number") {
        return "ERROR";
    }
    if (numTwo > numOne) {
        return sumToNumber(numTwo) - sumToNumber(numOne) + numOne;
    } else {
        return sumToNumber(numOne) - sumToNumber(numTwo) + numTwo;
    } // We add numOne or numTwo respectively because it shouldn't be subtracted. We could also subtract sumToNumber(numX-1)
};

// Do not edit below this line
module.exports = sumAll;
