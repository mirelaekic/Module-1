/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/
/*
const rectangle = function (l1, l2) {
    const result = l1 * l2;

    return result;
}
console.log("The area of rectangle is: " + rectangle(l2, 6)); */

// const area = (a=11, b=12) => a * b; 

// area();

// 

const area = function (x) {
    const result = x * x;

    return result;
};

console.log(area(11) + area(12));

/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/

function crazySum(x, y) {
    if (x === y) {
      return 3 * (x + y);
    } else {
      return x + y;
    }
  }
  console.log(crazySum(34, 55));
  console.log("crazySum:", crazySum(22, 22));
    
/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/

function crazyDiff(x1) {
    if (x1 <= 19) {
        return (x1 - 19);
    }
    else{
        return (x1 - 19) * 3
    }
}

console.log(crazyDiff(20));
console.log(crazyDiff(19));
console.log(crazyDiff(23));


/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/

function boundary(N) {
    if (((100 - N) <= 20) || ((400 - N) <= 20)); {
        return true;
    } 


console.log(boundary(100));
console.log(boundary(400));

/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

function check3and7(m) {
    if (m % 3 === 0 || m % 7 === 0) {
        return true;
    }
    else{
        return false;
    }
}

console.log(check3and7(20));
console.log(check3and7(40));

/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/

function reverseString(a) {
    return a.split(" ").reverse().join(" ");
}

console.log(reverseString("StriveSchool"));

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/

    function upperFirst(lol)
    {
        lol = lol.split(" ");

        for (var i = 0, x = lol.length; i < x; i++){
            lol[i] = lol[i][0].toUpperCase() + lol[i].substr(1);
        }

        return lol.join(" ");
    }

    console.log(upperFirst("capitalizing the first letter of each word"))

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

const cutString= (S) => S.substring(1, S.length-2);

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/

const giveMeRandom = (n) => {
    let randomArray = [];
  
    for (let i = 0; i < n; i++) {
      let randomNumber = Math.floor(Math.random() * 10);
      randomArray.push(randomNumber);
    }
  
    console.log("Random Array Generating...");
    console.log(randomArray);
    console.log("Number of Entries: ", randomArray.length);
  };
  
  giveMeRandom(30);
  

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/
