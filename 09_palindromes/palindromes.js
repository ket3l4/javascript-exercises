const palindromes = function (text) {
    let makePlainText = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
        .replace(/ /g, '')
        .toLowerCase()
    
    let reversed = makePlainText
        .split("")
        .reverse()
        .join("");
    return makePlainText === reversed;
    
};
// Do not edit below this line
module.exports = palindromes;
