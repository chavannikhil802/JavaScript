document.write("<h1>Chp. 5 - JavaScript Tutorial 5: Practice Set</h1>");
document.write('<hr>');

// QUESTION 1
let a = 'Nikhil';
let b = 1809;
document.write("<h3>Question 1 - Create a variable of type string and try to add a number to it.</h3>");

document.write("a = "+a+"<br>");
document.write("b = "+b+"<br>");
document.write("a + b = "+(a+b)+"<br>");
document.write('<hr>');

// QUESTION 2
document.write("<h3>Question 2 - Use typeof operator to find the datatype of the string in question 1.</h3>");

document.write("typeof a + b = "+typeof (a+b)+"<br>");
document.write('<hr>');

// QUESTION 3
document.write("<h3>Question 3 - Create a const object in JavaScript. can you change it to hold a number in it?</h3>");

const c = {
    name: "Nikhil",
    section: 1,
    isPrincipal: false
}
// c = "Nikhil";
// c = 1809;

document.write("No. It gives the following error: <strong>Uncaught TypeError: Assignment to constant variable.</strong>");
document.write('<hr>');

// QUESTION 4
document.write("<h3>Question 4 - Try to add a new key to const object in question 3. Were you able to do it?</h3>");

c['friend'] = "Rishikesh"
document.write(c['friend']);
document.write("<br>Yes. you can add a new key to const object const c is a reference to the object that is created.<br>"+
                "You cannot change the datatype of const c. You cannot change the value of const c.<br>"+
                "You cannot change the object assigned to const c.<br>"+
                "But you can change the key values of the object that is created.<br>"+
                "You can also change the values of the key of the object.");
document.write('<hr>');

// QUESTION 5
document.write("<h3>Question 5 - Write a JavaScript program to create a word - meaning directory of 5 words.</h3>");

const dictionary = {
    affection: "fond attachment, devotion, or love",
    belief: "confidence in the truth or existence of something not immediately susceptible to rigorous proof",
    devotion: "profound dedication, especially to religion",
    faith: "belief that is not based on proof",
    gratitude: "the quality or feeling of being grateful or thankful",
    love: "a strong feeling of warm personal attachment or deep affection, such as for a parent, child, friend, or pet"
}

document.write("<strong>affection: </strong>"+dictionary.affection+"<br>");
document.write("<strong>belief: </strong>"+dictionary.belief+"<br>");
document.write("<strong>devotion: </strong>"+dictionary.devotion+"<br>");
document.write("<strong>faith: </strong>"+dictionary.faith+"<br>");
document.write("<strong>gratitude: </strong>"+dictionary.gratitude+"<br>");
document.write("<strong>love: </strong>"+dictionary.love+"<br>");
document.write('<hr>');