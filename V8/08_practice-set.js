// QUESTION 1 SOLUTION 

// let age = prompt("What is your age?");
// age = Number.parseInt(age);s
// if(age > 10 && age < 20) {
//     console.log("Your age lies between 10 and 20");
// }
// else {
//     console.log("Your age is not between 10 and 20");
// }

// **********************************************************************************

// QUESTION 2 SOLUTION 

// let switch_age = prompt("What is your age?");

// switch(switch_age) {
//     case '12':
//         console.log("Your age is 12");
//         break;
//     case '13':
//         console.log("Your age is 13");
//         break;
//     case 14:
//         console.log("Your age is 14");
//         break;
//     case '15':
//         console.log("Your age is 15");
//         break;
//     case '16':
//         console.log("Your age is 16");
//         break;
//     default:
//         console.log("Your age is not special");
// }

// **********************************************************************************

// QUESTION 3
// let num = prompt("Please enter a number");
// num = Number.parseInt(num);

// if(num%2 == 0 && num%3 == 0) {
//     console.log(num+" is divisible by 2 and 3");
// }
// else {
//     console.log(num+" is not divisible by 2 and 3");
// }

// **********************************************************************************

// QUESTION 4
let num1 = prompt("Please enter a number");
num1 = Number.parseInt(num1);

if(num1%2 == 0 || num1%3 == 0) {
    console.log(num1+" is divisible by 2 or 3");
}
else {
    console.log(num1+" is not divisible by 2 or 3");
}