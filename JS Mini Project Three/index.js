/*

// Arithmetic Playground Challenge 2


let a = 12;
let b = 5;

let sum = a + b;
console.log(sum);

let difference = a - b;
console.log(difference);

let product = a * b;
console.log(product);

let quotient = a / b;
console.log(quotient)

let remainder = a % b;
console.log(remainder);

let exponent = a ** b;
console.log(exponent);

console.log(a++);
console.log(a);

console.log(++a);
console.log(a);

console.log(b--);
console.log(b);

console.log(--b);
console.log(b);

*/

/*
// COMPOUND ASSIGNMENT CHALLENGE 4.

let x = 20

x += 1;
console.log(x);

x -= 1;
console.log(x);

x *= 2;
console.log(x);

x /= 2;
console.log(x);

x %= 3;
console.log(x);
*/

/*
// TRUTH OR FALSY CHECK CHALLENGE 5

let x = [0, "", null, undefined, "Hello", 42];

if (x[0]) {
    console.log(x[0], "is true")
}
else {
    console.log(x[0], "is false")
}

if (x[1]) {
    console.log(x[1], "is true")
}
else {
    console.log(x[1], "is false")
}

if (x[2]) {
    console.log(x[2], "is true")
}
else {
    console.log(x[2], "is false")
}

if (x[3]) {
    console.log(x[3], "is true")
}
else {
    console.log(x[3], "is false")
}

if (x[4]) {
    console.log(x[4], "is true")
}
else {
    console.log(x[4], "is false")
}

if (x[5]) {
    console.log(x[5], "is true")
}
else {
    console.log(x[5], "is false")
}

// for loop practice.

for (let i = 0; i < x.length; i++) {
    if (x[i]){
        console.log(x[i], "is truthy")
    }
    else {
        console.log(x[i], "is falsy")
    }
}

*/

/*

// CHALLENGE 6: TYPE CONVERSION.

let hundred = "100";
hundred = Number(hundred);

let sum = hundred + 50;
sum = String(sum);

console.log(sum);

console.log(typeof(sum));

*/

/*

// CHALLENGE 7: LOGIN SIMULATION
hasUsername = true;
hasPassword = false;

if (hasUsername && hasPassword) {
    console.log("Login Successful")
}

// else if (hasUsername || hasPassword){
//    console.log("Login Failed")
// }
// else if is doing same work with else so it is redundant.

else {
    console.log("Login Failed")
}

*/

/*

// CHALLENGE 8: STRING MANIPULATION
let fullName = "Amudipe Olamilekan Victor"
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName.length);
console.log(fullName[0]);
console.log(fullName[fullName.length - 1])

*/

// CHALLENGE 9: COMPLEX EXPRESSION
// create a = 10, b = 3, c = 5.
// calculate and print:
// (a + b) * c - (a % b)
// comment step by step how Js evaluates it

const a = 10;

const b = 3;

const c = 5;

let result = (a + b) * c - (a % b);
// paranthesis first (13) * 5 - (1)
// 13 * 5 = 65
// -1 * 1 = - 1. // according to chat gpt no need for this line
// 65 - 1 = 64
console.log(result);
