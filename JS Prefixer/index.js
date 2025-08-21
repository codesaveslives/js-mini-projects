/*

// add a prefix to strings using closure

const addMr = createPrefixer("Mr. ");
console.log(addMr("John")); // "Mr. John"
console.log(addMr("Steve")); // "Mr. Steve"

const addHello = createPrefixer("Hello, ");
console.log(addHello("Alice")); // "Hello, Alice"

// Your task: write createPrefixer
function createPrefixer(prefix) {
    // return a function that adds prefix to input string
}

// concept: inner function remembers the prefix.
*/

function createPrefixer(prefix) {

    return function(name) {
        return prefix + name;
    }
}

const addMr = createPrefixer("Mr. ");
console.log(addMr("John"));

const addHello = createPrefixer("Hello, ");
console.log(addHello("Alice"));