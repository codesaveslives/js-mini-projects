/*
MY INITIAL SOLUTION

const votingAge = 18

let name = prompt("Enter Your Name: ")
let age = Number(prompt("Enter Your Age: "))

if (age >= 18) {
    console.log(`Hello ${name} you are eligible to vote.`)
}
else {
    console.log(`Hello ${name} you are not eligible to vote.`)
}
*/    

const votingAge = 18;

const name = prompt("Enter Your Name: ");
const age = Number(prompt("Enter Your Age: "))

if (age >= 18) {
    console.log(`Hello ${name}, You are eligible to vote.`)
}
else {
    console.log(`Hello ${name}, You are not eligible to vote.`)
}
