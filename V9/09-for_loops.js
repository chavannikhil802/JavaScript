// PROGRAM TO ADD N NATURAL NUMBERS

let sum = 0;
let n = prompt("Enter the value of n");
n = Number.parseInt(n);

for(let i=1; i<=n; i++) {
    sum = sum + i;
}
console.log("Sum of first "+n+" natural numbers is "+sum);