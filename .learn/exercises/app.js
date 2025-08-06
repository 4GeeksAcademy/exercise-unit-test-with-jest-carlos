// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum , fromDollarToYen, fromEuroToDollar, fromYenToPound};

function fromDollarToYen(Dollar){
let Yen = Dollar * 146.26
return Yen
}

function fromEuroToDollar(Euro){
let Dollar = Euro * 1.07
return Dollar
}

function fromYenToPound(Yen){
let Pound = Yen * 0.00549521
return Pound
}