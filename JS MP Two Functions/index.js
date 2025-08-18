/*

// Challenge 1

// Multiply Factory

function outerfunction(x) {
    function innerfunction(y) {
        return x * y; 
    }
    return innerfunction;
}

createMutltiplyBy5 = outerfunction(7)
console.log(createMutltiplyBy5(3));
console.log(createMutltiplyBy5(10));

*/