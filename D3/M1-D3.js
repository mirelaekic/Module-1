/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can ask for tutor's help
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/

/* EXERCISE 1
Create and array with the first 5 positive numbers
*/

 const myArray = [1, 2, 3, 4, 5];
    
/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

    const person = {
    name: "Mirela",
    surname: "Ekic",
    emailaddress: "mirelaekic@outlook.com",
    age: 21,
    };

    console.log(person); 

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license
*/

if(person.driverslicence) {
    console.log(person.driverslicence);
}   else {
    console.log("This person does not have a driving licence.");
}


/* EXERCISE 4
Remove from the previously created object the age
*/

delete person.age;
console.log(person);

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address
*/

const person2 = {
    name: "Bella",
    surname: "Dog",
    emailaddress: "belladog@outlook.com",
    };
    console.log(person2);
    console.warn(person2.name + " " + person2.surname + " has a different email address");

/* EXERCISE 6
You are working for an eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50€, they can have free shipping (otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.
*/

const totalShoppingCart = 60;
const totalCost = totalShoppingCart < 50 ? "no free shipping" : "free shipping";

console.log(totalCost);

/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.
*/

function percentage(num, per) {
    return (num/100)*per;
}

console.log(percentage(20,totalShoppingCart));


/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it and change the licensePlate without affecting the original car.
Do it for five cars.
*/
const car = {
    brand: "Audi",
    model: "A5",
    licensePlate: "F2345",
};
console.log(car);

Object.assign({}, car, delete car.licensePlate);

const car2 = Object.assign({}, car); 
console.log(car2); 

const car3 = Object.assign({}, car); 
console.log(car3);

const car4 = Object.assign({}, car); 
console.log(car4);

const car5 = Object.assign({}, car); 
console.log(car5);


/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise
*/

const carsForRent = ["car" , "car2" , "car3" , "car4" , "car5"];
console.log(carsForRent);

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

// console.log(carsForRent.slice(1, 4))

/* EXERCISE 11
Print in the console, the types of a single car, of the car licensePlate and of the brand
*/

/* */

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays
*/

const carsForSale = ["car", "car", "car"];
const totalCars = (carsForSale.concat(carsForRent));
console.log(totalCars);

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Send the code on Discord via a message to your tutor! In the next days we'll also learn how to use GIT 
*/
