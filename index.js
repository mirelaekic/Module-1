// SWITCH CASE

/* if(x==="value1") {
    // do something
} else if (x === "value2") {
    // do something else
} else if(x === "value3"){

} else {
    // something not covered by previous
} */

// ALTERNATIVE 

const i = 6

switch (i) {
    case 0:
        console.log("i is zero");
        break;
    case 1:
        console.log("i is one");
        break;
    case 2:
        console.log("i is two");
    case 3:
        console.log("i is three");
        break;
    case 4:
        console.log("i is four");
        break;
    case 5:
        console.log("i is five");
        break;
    case 6:
        console.log("i is six");
        break;
    default:
        break;
}

// if (i === 0) {
// } else if ( i === 1) {
// } else if (i === 2)  {
// } 

// ********************** STRINGS ***************************

// const example = 123213;
//const singleQuoted = 'dsfffsf';
// const doubleQuoted = "dfsfdfsfd" + "123213";

// const templateLiterals = `Value of example variable is: ${example} 
    
// value of doubleQuoted variable is: ${doubleQuoted}
// `;

// console.log(templateLiterals.toLowerCase());

// console.log(templateLiterals.slice(4, 10));

// console.log(templateLiterals.indexOf("e")); // search an index of an array

// console.log(templateLiterals.split(" "))

/* const arrayOfWords = templateLiterals.split(" ");

console.log(templateLiterals);

console.log(arrayOfWords);

const joinedWithoutDots = arrayOfWords.join("....");

console.log(arrayOfWords);

console.log("hi".repeat(3)); */




// *************** FUNCTION ***************************


// function is used to wrap a code

// DECLARING A FUNCTION

const square = function (x) { // function(paramreter)
    // body of the function
    const result = x * x;

    return result;

    // end of body

};

console.log("the result 4*4 is: " + square(4));
console.log(square(6));

const squareOf25 = square(25);

console.log(squareOf25);

let myFunction = function(){
    console.log("hello");
};

myFunction = function () {}; // if function is a let i can overwrite it
console.log(squareOf25);

//c ARROW FUNCTIONS

const sum = function (a, b){
    return a + b
};

const sum = (a, b) => {  // NORMAL ARROW FUNCTioN
    return a +b;
};

const sum = (a, b) => a + b; // SHORTER SYNTAX

