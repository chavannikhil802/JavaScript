document.write("<h1>Chp. 3 - JavaScript Tutorial 3: var, let and const</h1>");
document.write('<hr>');
// DECLARING A VARIABLE 'a' USING var
var a = "Nikhil";
// DECLARING A VARIABLE 'b' using let
let b = "nikhil";
// DECLARING CONST 'c'
const author = 'Nikhil Chavan';

document.write('<h3>Scope access for var and let</h3>');
// PRINTING a
document.write('Initial value of a outside block -> '+a);
// DECALRING A BLOCK FOR a
{
    // RE-DECLARING a INSIDE A BLOCK
    var a = "Nikhil Chavan";
    document.write('<br>Value of a inside block -> '+a);
}
// PRINTING a
document.write('<br>Value of a outside block, after updating the its value inside the block -> '+a+'<br><br>');

// PRINTING b
document.write('Initial value of b outside block -> '+b);
// DECALRING A BLOCK FOR a
{
    // RE-DECLARING a INSIDE A BLOCK
    let b = "nikhil nhavan";
    document.write('<br>Value of b inside block -> '+b);
}
// PRINTING a
document.write('<br>Value of b outside block, after updating the its value inside the block -> '+b+'<br><br>');
document.write('<hr>');

document.write('<h3>Re-declaration within Scope</h3>');
// var has global scope. The changes done to var a, in any scope, will be reflected globally.
// let has block scope. The changes done to var b, in any scope, will be reflected in that scope only.

// you can re-declare var a in the same scope. Following is the example:-
document.write('Current value of a -> '+a+'<br>');
var a = 'Nikhil Narendra Chavan';
document.write('Value of a after re-declaration in the same scope -> '+a+'<br>');
document.write('<hr>');

// but you cannot re-declare let b in the same scope. Following piece of code will give error

// let b = 'nikhil chavan';

// Following is the error:-
// Uncaught SyntaxError: Identifier 'b' has already been declared (at 03_const-let-var.js:42:5)

// const author value cannot be updated. Following piece of code will give error

// author = 'Nikhil';

// Following is the error:-
// Uncaught TypeError: Assignment to constant variable at 03_const-let-var.js:52:8

// const cannot be re-declared. Following piece of code will give error

// const author = 'Nikhil';

// Following is the error:-
// 03_const-let-var.js:59 Uncaught SyntaxError: Identifier 'author' has already been declared (at 03_const-let-var.js:59:7)

// const needs to be initialized during declaration or else it gives an error.
// Following piece of code will give error

// const c;

// Following is the error:-
// Uncaught SyntaxError: Missing initializer in const declaration (at 03_const-let-var.js:67:7)