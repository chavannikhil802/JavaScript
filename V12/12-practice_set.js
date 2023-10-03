let marks = {
    harry: 90,
    shubham: 9,
    nikhil: 95,
    monika: 5
}

// QUESTION 1 SOLUTION
for(let i = 0; i < Object.keys(marks).length; i++) {
    console.log("The marks of "+Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]])
}

// QUESTION 2 SOLUTION
for(let key in marks) {
    // console.log("The marks of "+Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]])
    console.log("The marks of "+key+" are "+marks[key])
}

// QUESTION 3 SOLUTION
let cn = 4;
let i = prompt("Enter a number");

while(i != cn) {
    i = prompt("TRY AGAIN!!!!!!");
    
}
console.log("You have entered a correct number");

// QUESTION 4 SOLUTION
const mean = (a, b, c, d) => {
    return (a + b + c + d)/4;
}

console.log("Mean of 4, 5, 6 and 7 is ", mean(4, 5, 6, 7));