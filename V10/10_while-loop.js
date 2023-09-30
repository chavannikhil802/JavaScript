// WHILE LOOP
let n = prompt("Enter the value for n");
n = Number.parseInt(n);

let i=0;
while(i<n) {
    console.log(i);
    i++;
}
// END OF WHILE LOOP

// DO-WHILE LOOP
do {
    console.log("Do-While Loop - "+i);
    i++;
}
while(i<n);
// END OF DO-WHILE LOOP