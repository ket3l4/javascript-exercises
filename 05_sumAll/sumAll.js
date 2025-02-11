const sumAll = function(start, end) {
    let sum = 0;
    if (start < 0 || end < 0 || // no negatives
        start % 1 !== 0 || end % 1 !== 0 || // no decimals
        typeof start !== "number" || // no strings
        typeof end !== "number") return "ERROR";

    if (end > start){
        for (let i = start; i <= end; i++) sum += i;
    }
    for (let i = end; i <= start; i++) sum += i;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
