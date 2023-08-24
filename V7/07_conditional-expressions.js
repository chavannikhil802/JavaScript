document.write("<h1>Chp. 7 - JavaScript Tutorial 7: Conditional Expressions</h1>");
document.write("<hr>");

let age = prompt("What is your age?");
// CONVERTING THE STRING INTO A NUMBER
age = Number.parseInt(age);

if(age<=0) {
    alert('Age cannot be negative or zero');
}
else if(age>18 && age <70) {
    alert('Age is valid');
}
else {
    alert('Age is not valid');
}