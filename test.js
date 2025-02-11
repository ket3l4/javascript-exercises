const findTheOldest = function(array) {
    let arr = [];
    let age;
    
    for (let i = 0; i < array.length; i++) {
        if (array[i].yearOfDeath === undefined
            || array[i].yearOfDeath === null) {
            age = 2025 - array[i].yearOfBirth
            arr.push(age)
        }
        else if (array[i].yearOfBirth === undefined
            || array[i].yearOfBirth === null) {
            arr.push("Cannot determine age, no birth record found.")
        }
        else {
            age = array[i].yearOfDeath - array[i].yearOfBirth
            arr.push(age)
        }
    }
    
    let oldest = 0;
   for (let i = 0; i < arr.length; i++) {
       if (oldest < arr[i]) {
           oldest = arr[i];
       }

   }
   
   oldest = arr.indexOf(oldest);
   return array[oldest];
   
};

const people = [
    {
        name: "Carly",
        yearOfBirth: 2018,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]

console.log(findTheOldest(people))