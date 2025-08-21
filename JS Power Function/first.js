// Power Function
// create a function that raises number to a fixed power.

/*
const square = createPower(2);
console.log(square(5)); // 25
console.log(square(10)); // 100

const cube = createPower(3);
console.log(cube(2)); // 8

// your task: write createPower

function createPower(exponent) {
    // returns a function that takes a number and raises it to "exponent"
}

// concept: closure remembers the exponent value.
*/

function createPower(exponent) {

    return function(num) {
        return num ** exponent
    }
}

/*
// no need to create a new function. the power of closure is reusability
function createCube(exponent) {

    return function(num) {
        return num ** exponent
    }
}
*/

const square = createPower(2);
console.log(square(2));

const cube = createPower(3);
console.log(cube(6));