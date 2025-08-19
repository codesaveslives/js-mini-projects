// create a function that takes a score and returns a grade

/* function GradingScale() {
    function percentageRange() {
        if 
    }
} */



function gradingScale(score) {
    if (score >= 90) {
        return "Excellent A";
    } else if (score >= 87 && score < 90) {
        return "A-";
    } else if (score >= 83) {
        return "Good B+";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 77) {
        return "B-"
    } else if (score >= 73) {
        return "Satisfactory C+"
    } else if (score >= 70) {
        return "C";
    } else if (score >= 67) {
        return " C-";
    } else if (score >= 63) {
        return "Poor/Passing D+";
    }
    else if (score >= 60) {
        return "D";
    } else {
        return "Fail F";
    }
}


console.log(gradingScale(54));

/* let grade = Number(prompt("Enter number: "));
let result = gradingScale(grade);
console.log(result); */