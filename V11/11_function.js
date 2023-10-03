let a = 1;
let b = 2;
let c = 3;

function onePlusAvg(x, y) {
    return 1 + (x + y)/2;
}

console.log("one plus Average of a and b is ", onePlusAvg(a, b));
console.log("one plus Average of a and b is ", onePlusAvg(b, c));
console.log("one plus Average of a and b is ", onePlusAvg(a, c));

// ARROW FUNCTION
const sum = (p, q) => {
    return p + q;
}

console.log();
console.log("sum of a and b is",sum(a, b));
console.log("sum of b and c is",sum(b, c));
console.log("sum of a and c is",sum(a, c));

// FUNCTION WITHOUT RETURN VALUE
const hello = () => {
    console.log("Hi!!!! How are YOU?");
}

hello();