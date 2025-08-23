/*

// Password Checker(Advanced)
// Goal: create a function that stores a password and returns a function to check it.

const checkPassword = createPasswordChecker("secret123")

console.log(checkPassword("test")); // false
console.log(checkPassword("secret123")); // true

// your task: write createPasswordChecker

function createPasswordChecker(password) {
    // return a function that takes input and checks against password
}

*/

/*
function createPasswordChecker() {
    return function (password) {
        if (password == "secret123") {
            console.log("true");
        }
        else{
            console.log(false);
        }
        return password
    }
}

const checkPassword = createPasswordChecker()
console.log(checkPassword("test"))
*/

function createPasswordChecker(password) {
    return function (input) {
        return input === password;
    }
}

const checkPassword = createPasswordChecker("leader")
console.log(checkPassword("leader"))