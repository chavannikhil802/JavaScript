document.write("<h1>Chp. 6 - JavaScript Tutorial 6: Operators and Expressions</h1>");
document.write('<hr>');

// ARITHMETIC OPERATORS

let a = 18;
let b = 9;
document.write("<h3>Arithmetic Operators</h3>");
document.write("a = "+a+"<br>");
document.write("b = "+b+"<br>");
document.write("<br>a + b = "+(a+b));
document.write("<br>a - b = "+(a-b));
document.write("<br>a * b = "+(a*b));
document.write("<br>a / b = "+(a/b));
document.write("<br>a % b = "+(a%b));
a++;
document.write("<br>Value of a after post-increment: "+a);
b--;
document.write("<br>Value of a after post-decrement: "+b+"<br>");
document.write("<hr>")

// ASSIGNMENT OPERATORS

let c = 18;
let d = 9;
document.write("<h3>Assignment Operators</h3><br>");
document.write("c: "+c+"<br>");
document.write("d: "+d+"<br>");
document.write("<br>c += d = "+(c+=d));
document.write("<br>c -= d = "+(c-=d));
document.write("<br>c *= d = "+(c*=d));
document.write("<br>c /= d = "+(c/=d));
document.write("<br>c %= d = "+(c%=d));
document.write("<hr>")

// COMPARISON OPERATORS

let e = 18;
let f = 9;
let g = 18;
let h = '18';
document.write("<h3>Comparison Operators</h3><br>");
document.write("e: "+e+"<br>");
document.write("f: "+f+"<br>");
document.write("g: "+g+"<br>");
document.write("h: "+h+"<br><br>");
document.write("typeof e: "+typeof e+"<br>");
document.write("typeof f: "+typeof f+"<br>");
document.write("typeof g: "+typeof g+"<br>");
document.write("typeof h: "+typeof h+"<br><br>");
document.write("<br>e == f = "+(e==f));
document.write("<br>e != f = "+(e!=f));
document.write("<br>e === g = "+(e===g));
document.write("<br>e === h = "+(e===h));
document.write("<br>e !== g = "+(e!==g));
document.write("<br>e !== h = "+(e!==h));
document.write("<hr>")

// LOGICAL OPERATORS

let i = 18;
let j = 9;
document.write("<h3>Logical Operators</h3><br>");
document.write("<h4>For Logical Operators, please check the browser console for the outputs.</h4><br>");
document.write("<hr>")

console.log("i: "+i);
console.log("j: "+j);
console.log("i>j && i==18 = "+((i>j) && (i==18)));
console.log("i<j && i==18 = "+((i<j) && (i==18)));
console.log("i>j || i==18 = "+((i>j) || (i==18)));
console.log("i<j || i==18 = "+((i<j) || (i==18)));
console.log("!true = "+!true);
console.log("!false = "+!false);