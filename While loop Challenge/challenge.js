// Beginner Challenge

/*
// 1
// count from 1 to 10.
// use a while loop to print through numbers 1 through 10.

// solution

let num = 0;

while(num < 10) {
    num++;
    console.log(num);
}
*/

/*

// 2
// Print all even numbers from 2 to 20 using while loops.

// Using Modulus
let numbers = 0;

while (numbers < 20) {
    numbers++
    if (numbers % 2 === 0) {
        console.log(`${numbers}, is an even number.`);
    }
    
}

// Using addition assignment operator
let number = 2 

while (number < 20) {
    console.log(`${number}, is an even number`);
    number+=2
}

*/

/*

// 3
// Countdown
// start at 10 then count down to 1, then print lift off.

// My solution
let highestNumber = 11;

while (highestNumber <= 11 && highestNumber > 1) {
    highestNumber--;
    console.log(highestNumber);
}

if (highestNumber === 1) {
    console.log(`LiftOff`)
}

// ChatGpt Solution
let number = 10;

while (number > 0) {
    console.log(number)
    number--;
}
console.log("liftOff")
*/


// 4
// Sum Of Numbers
// Use a while loop to add up numbers from 1 to 100 and print the total.
let sum = 0;

let nextValue = 1

while (nextValue <= 100) {
    sum = sum + nextValue;

    if (nextValue === 100) {
        console.log(sum)
    }
    nextValue++;
}
