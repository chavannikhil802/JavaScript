// Primitive Datatypes:-
// a - null
// b - number
// c - symbol
// d - string
// e - boolean
// f - BigInt
// g - undefined

document.write("<h1>Chp. 4 - JavaScript Tutorial 4: Variables and Objects</h1>");
document.write('<hr>');

let a = null;
let b = 1809;
let c = true; // can also be false
let d = BigInt("567") + BigInt("100");
let e = "Nikhil";
let f = Symbol("I am a nice symbol");
let g = undefined;

document.write("a -> "+a+"<br>");
document.write("b -> "+b+"<br>");
document.write("c -> "+c+"<br>");
document.write("d -> "+d+"<br>");
document.write("e -> "+e+"<br>");
document.write("f -> "+f.toString()+"<br>");
document.write("g -> "+g+"<br>");
document.write('<hr>');

document.write("Datatype of a -> "+(typeof a)+"<br>");
document.write("Datatype of b -> "+(typeof b)+"<br>");
document.write("Datatype of c -> "+(typeof c)+"<br>");
document.write("Datatype of d -> "+(typeof d)+"<br>");
document.write("Datatype of e -> "+(typeof e)+"<br>");
document.write("Datatype of f -> "+(typeof f)+"<br>");
document.write("Datatype of g -> "+(typeof g)+"<br>");
document.write('<hr>');

// Non - Primitive datatypes - Object
const item = {
    "Nikhil": true,
    "Umesh": false,
    "Vaibhav": 30,
    "Ketan": undefined
}

document.write(item["Nikhil"]+"<br>");
document.write(item["Umesh"]+"<br>");
document.write(item["Vaibhav"]+"<br>");
document.write(item["Ketan"]+"<br>");
document.write(item["Yash"]+"<br>");