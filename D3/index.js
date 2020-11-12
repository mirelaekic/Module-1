// LET VS CONST 
// allows the use of the const keyword to define
// a variable that cannot be reassigned,
// and the let keyword to define a variable with 
// restricted scope.
/*
let myVar = 0; // if i know i will change variable use this 
const myVar2 = 0; // for everything else this is better
*/

// TERNARY OPERATOR - using it often rather then IF operator 

const age = 17;

const price = age > 18 ? "20$" : "15$"; // : means otherwise // ? is IF

console.log(price);

// ------------------------- //

// TRUTHY AND FALSY

const truthyOrFalse = 2 - 2 ? "truthy" : "falsy";

console.log(truthyOrFalse);

// when using: undifined, null, 0, "", NaN ----> FALSY VALUES

// DOUBLE EQUALTY VS TRIPLE EQUALITY

console.log(null === undefined);

//  ALWAYS use TRIPLE equality as it is looking more similarity with the compared sign 



// ************ OBJECTS *********** //

const user = {
    name: "John",
    surname: "Rambo",           
    age: 18,
    isStudent: true,
    "is Student": true,
};

user.name = "Riccardo";
console.log(user);

const user1 = {
    name: "John",
    surname: "Rambo",           
    age: 18,
    isStudent: true,
    "is Student": true,
};

console.log(user1);
// console.log(user);
// console.log(user.age); // user["name]
// console.log(user["is Student"]);

// console.log(user.birthDate);

if(user.birthDate) {
    console.log(user.birthDate);
}   else {
    console.log("Birthdate does not exist!");
}

// user2 = {};
// user.name = "Riccardo";
// console.log(user.name + "" user2.name)

// CLONING OBJECTS

/* const user2 = user; // DO not DO this to clone objects 
Object.assign(user2, user); // DO THIS */

// DELETE PROPERTIES

/* delete user.name;

console.log(user);

user.name = "George";

console.log(user); */




// ********* ARRAYS ********* //

/* const myArray = [10,20,30,4,5,6,78,8]; // every number here is an element 
                                  // every element has its own INDEX 
                                  // fist position === 0, second === 1, last position === 7
console.log(myArray[0]); // to acces an element I need to use -> nameofTheArray(index)
console.log(myArray[6]);
console.log(myArray[5]); // index 8 is out of the bounds --> undefined! 

const arrayOfStrings = ["hello", "strivers", "!"];

console.log(arrayOfStrings[2]);

console.log(myArray.length); */

// ARRAY OF OBJECTS

/* const users = [
    {
        name:"Johny",
        surname:"Rambo",
    },{
        name:"Mirela",
        surname:"Ekic",
    },{
        name:"Tomislav",
        surname:"Ilic",
    }
];

console.log(users[1].name); */

// ARRAYS USEFUL METHODS

// const myArray= [1,2,6,34,6,234,677685,231,32,908,3];

/* myArray.push(4);

console.log(myArray);

myArray.pop();
console.log(myArray);           // Exctracting

const lastElement = myArray.pop();
console.log(myArray);
console.log(lastElement); */

// console.log(myArray.indexOf(8));
// console.log(myArray.lastIndexOf(8));

/* console.log(myArray.slice(2, 4))

const slicedArray = myArray.slice(4, 7);
console.log(slicedArray);
console.log(myArray); */

console.log(myArray.concat([7,8,9]));

// const myArray2 = [7,3425,4535,654646];

// console.log(myArray.concat(myArray2));

/* const index = 2 
const myArray = ["s", "we", "f", "d", "r"];

// console.log(myArray.slice(0, index).concat(myArray.slice(index + 1)));

const firstPart = myArray.slice(0, index);
console.log(firstPart);
const secondPart = myArray.slice(index + 1);
console.log(secondPart);

const concatenatedArray = firstPart.concat(secondPart);
console.log(concatenatedArray); */




// *********** LOOPS **********************

// FOR LOOP

/* for(let i=0; i<=5; i++){ 
    // (declaring and initializing a variable;condition; increment the variable)
    console.log(i);
    console.log("next");  // first iteration --> i=0, second iteration -> i=1
}; */

const myArray = [0, 177656, 290, 3223, 40, 5, 6];

for (let i = 0; i < myArray.length; i++) { // iterating element by starting from myArray[0] to myArray[6]
    // condition -> till i LOWER THAN 7
    console.log("hey i am prinitng element with index: ", i);
    console.log("here is the element ->", myArray[i]);
    if (i == 2) {
        break;
    }
}

// ********************** IMPORTANT ************************ //

for(let el of myArray) {
    console.log(el);
}

// i++ INCREMENTING
