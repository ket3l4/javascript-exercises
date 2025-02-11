const fibonacci = function(num) {
    let first = 0;
    let second = 1;
    num = parseInt(num);
    if (num === 0) return first;
    else if (num === 1) return second;
    else if (num < 0) return "OOPS";
    else {
        for (let i = 1; i < num; i++) {
            let temp = first;
            first = second;
            second = temp + second;
        }
        return second
    }
    
};
// Do not edit below this line
module.exports = fibonacci;
