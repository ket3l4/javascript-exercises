const removeFromArray = function(array, ...args) {

    for(const item of args){
        let index = array.indexOf(item);
        if (index > -1){
            array.splice(index, 1);
            while(array.includes(item)===true){
                array.splice(index, 1);
            } //removes duplicate items
        } // removes item if in array
    } // loops through each item in args
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

// index the item in the array
// remove the indexed item