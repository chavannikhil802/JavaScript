let marks = {
    harry: 90,
    shubham: 9,
    nikhil: 95,
    monika: 5
}

// QUESTION 1 SOLUTION
for(let i = 0; i < Object.keys(marks).length; i++) {
    console.log("The marks of "+Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]])
}

// QUESTION 2 SOLUTION
for(let key in marks) {
    // console.log("The marks of "+Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]])
    console.log("The marks of "+key+" are "+marks[key])
}