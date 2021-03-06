/*
    ASSIGNMENT RULES
    - All the answers must be in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for tutor's help
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account before 17.00 (Berlin Time)
*/

//JS Basics

/* Ex.A
   Create a variable test that contains a string
*/

const test = "string";

/* Ex.B
    Create a variable sum that contains the result of the sum between 10 and 20 
*/

console.log(10 + 20);

/* Ex.C 
    Create a variable random that contains a random number between 0 and 20 (should be randomly created at each execution)
*/

const random = Math.floor(Math.random() * 20);

console.log(random);

/* Ex.D
    Create a variable Me containing and object with the current information: Name = Your Name, Surname = Your Surname, Age = Your Age
*/
 const Me = {
    name: "Mirela",
    surname: "Ekic",
    age: 21,
}


/* Ex.E 
    Programmatically remove the Age from the previously create object Me
*/

delete Me.age;


/* Ex.F 
   Programmatically add to the object Me an array "skills" that contains the programming languages that you know
*/

Me.skills = ["HTML", "JavaScript"];


/* Ex.G 
   Programmatically remove the last skill from the array "skills" inside of the "me" object
*/

Me.skills.pop();

console.log(Me);

// JS Functions
/* Ex.1
    Write the function Dice that randomize an integer number between 1 and 6
*/
/* function Dice(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(Dice(1,6)); */

function Dice(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(Dice(1,6));        

/* Ex.2 
    Write the function WhoIsBigger that receives 2 numbers and returns the bigger of the 2
*/

function WhoIsBigger (x,y) {
  if (x > 2 || y > 2) {
    return x || y;
  } else {
    return "2 is the biggest num"; 
  }
}

console.log(WhoIsBigger(1,1));

/* Ex.3
    Write the function SplitMe that receives a String and returns an array with every word in that string
    Ex. SplitMe("I love coding") => returns [ "I","Love","Coding"]
*/

 let SplitMe = "I love coding";

 console.log(SplitMe.split(" ",)); 

/* Ex.4
    Write the function DeleteOne that receives a string and a boolean. 
    If the boolean is true, should return the string without the first letter, 
    otherwise should remove the last one
*/


/* Ex.5
   Write the function OnlyLetters that receives a string, removes all the numbers and returns it.
   Ex.: OnlyLetters("I love 123 whatever")  => returns "I love whatever"
*/

  const OnlyLetters = "I love 123 whatever".replace("123","");

  console.log(OnlyLetters);

/* Ex.6 
   Write the function IsThisAnEmail that receives a string and returns true if the string is a valid email.
*/

function IsThisAnEmail (a,b) {
  if (a <= b) {
    return true;
  } else {
    return false;
  }
}

console.log(IsThisAnEmail("email"));

/* Ex.7
   Write the function WhatDayIsIt that should return the day of the week
*/

let WhatDayIsIt;

WhatDayIsIt = new Date();

console.log(WhatDayIsIt.toDateString());

/* Ex.8
    Write the function RollTheDices that receives a numeric input and 
    returns an object that contains both the sum of the value of the dices and the dices itself
    This function should use the Dice function defined in Ex1
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [ 3, 3, 4]
    }
*/

/* Ex.9
   Write the function HowManyDays that receives a Date and return the number of days that has passed since that day.
*/

/* Ex.10
   Write the function IsTodayMyBDay that returns true if it's your birthday, false otherwise
*/



/* Movies array is an example array, used for the exs. Don't change it :)  */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];  

// JS Arrays // Objs
// NOTE: movies array is defined at the end of the file

/* Ex.11
   Write the function DeleteProp that receives an object and a string, and returns the object after deleting the property with that given name
*/


/* Ex.12 
    Write the function OlderMovie that finds the older movie in the array
*/

const OlderMovie = movies;

console.log(OlderMovie.sort((a, b) => {
  if (a.Year < b.Year)
    return -1;
  if (a.Year > b.Year)
    return 1;
  return 0;
}));

/* Ex.13
    Write the function CountMovies that returns the number of movies into the array
*/
const CountMovies = movies;

console.log(CountMovies.length);

/* Ex.14
    Write the function OnlyTitles that creates an array with only the titles of the movies
*/

const OnlyTitles = movies.map((movies) => {
  return movies.Title
});

console.log(OnlyTitles);



/* Ex.15
   Write the function OnlyThisMillennium that returns only the movies produced in this millennium
*/

const OnlyThisMillennium = movies.filter((movies) => {
  return movies.Year >= 2000
})

console.log(OnlyThisMillennium);

/* Ex.16 
    Write the function GetMovieById that receives an ID and returns the movie with the given ID
*/
/*
const GetMovieById = movies.map((movies) => {
  return movies.imdbID 
})

console.log(GetMovieById); */

// ANOTHER OPTION

const GetMovieById = movies.find((movies) => {
  return movies.imdbID === "tt0077869"          // add ID number to find a movie with the given ID
}); 

console.log(GetMovieById);


/* Ex.17
    Write the function SumYears that returns the sum of the years the movie has been produced
*/

/* Ex.18
    Write the function SearchMovie that receives a string and returns all the movies with that string in the title
*/

const SearchMovie = movies.find((movies) => {
  return movies.Title == "Avengers: Endgame"                 // same as Ex.16s
}); 

console.log(SearchMovie);

/* Ex.19
    Write the function SearchAndDivide that receives a string and returns an object with an array "match" with all the movies that contains the title and another array "nonMatch" with the other movies
*/


/* Ex.20
   Write the function DeleteX that receives a number and returns an array without the element in that position
*/

// JS Advanced

/* Ex.21
  Create a function HalfTree that recives the height creates an "*" half tree with that height
  Example:
  HalfTree(3)
  *
  **
  ***
*/

/* Ex.22 
  Create a function Tree that receives the height and creates an "*" tree with that height
  Example: 
  Tree(3)
    *  
   *** 
  *****
*/

/* Ex.23
  Create a function IsItPrime that receives a number and return true if the number is a prime number
*/


