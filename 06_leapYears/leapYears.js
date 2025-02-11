const leapYears = function(year) {
    if (year % 4 === 0) { // divisible by 4
        if (year % 100 !== 0) return true; // not century
        else return year % 400 === 0; // century and divisible by 400?
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
