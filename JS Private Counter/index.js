/*

// create a counter function that keeps its own private count.

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// your task: write createCounter
function createCounter() {
    // return a function that increments and returns a private count
}

// concept Count variable is private, only accessible to the returned inner function.

*/

/* function privateCounter(y=0) {
    let count = 0
    return ++count + y;
}

console.log(privateCounter()) */

/*
// My first failed Solution

function createCounter() {
    function privateCounter(y=0) {
        let count = 0
        return ++count + y;
    }
    return privateCounter
}

let counter = createCounter();
console.log(counter());

*/

// Chat Gpt explanation
function createCounter() {
    let count = 0; // private variable

    return function() {
        count++;        // increase the private variable
        return count;   // give back the new value
    };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
