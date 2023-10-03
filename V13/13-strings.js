let name = "Nikhil";
console.log(name);
console.log(name.length);

let friend = 'Umesh';
console.log(friend);
console.log(friend.length);

// TEMPLATE LITERAL

let str1 = "Nikhil";
let str2 = "Umesh";

let sentence = `str1 is "a" friend 'of' str2`;
console.log(sentence);

// TEMPLATE LITERAL INTERPOLATION

sentence = `${str1} is a friend of ${str2}`;
console.log(sentence);

// ESCAPE SEQUENCE

let fruit = 'bana\'na';
console.log(fruit);

fruit = "bana\"na";
console.log(fruit);

fruit = 'ban\nana';
console.log(fruit);

fruit = 'ban\tana';
console.log(fruit);
