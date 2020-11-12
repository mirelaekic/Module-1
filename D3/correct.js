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
/* WRITE YOUR CODE HERE */
let positiveNumbers = [1, 2, 3, 4, 5];

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/
/* WRITE YOUR CODE HERE */
let myself = {
    name: "Simona",
    surname: "Cossai",
    email: "cossaisimona@gmail.com",
    age: 19
}

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license
*/
/* WRITE YOUR CODE HERE */
myself.drivingLicense= false;
//console.log(myself);

/* EXERCISE 4
Remove from the previously created object the age
*/
/* WRITE YOUR CODE HERE */
delete(myself.age);
//console.log(myself);

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address
*/
/* WRITE YOUR CODE HERE */
let you ={
    name: "John",
    surname: "Smith",
    email: "johnsmith@gmail.com"
}
console.log(you.email !== myself.email);

/* EXERCISE 6
You are working for an eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50€, they can have free shipping
(otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.
*/
/* WRITE YOUR CODE HERE */
let totalShoppingCart;
let totalCost;
let shippingCost= 10;
if(totalShoppingCart>50){
    totalCost=totalShoppingCart;
}else{
    totalCost=totalShoppingCart + shippingCost;
}

totalCost = (totalShoppingCart>50) ? totalShoppingCart : totalShoppingCart+shippingCost;

/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, 
calculate the totalShopping.
*/
/* WRITE YOUR CODE HERE */
let percent= 20;

if((percent / 100)*totalShoppingCart>50){
    totalCost=totalShoppingCart;
}else{
    totalCost=totalShoppingCart + shippingCost;
}


/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it and change the licensePlate without affecting the original car.
Do it for five cars.
*/
/* WRITE YOUR CODE HERE */
let car ={
    brand: "Ferrari",
    model: "Portofino",
    licensePlate: "AD789CK"
}
console.log(car);
car2={};
car3={};
car4={};
car5={};
car6={};
let cars = [car2, car3, car4, car5, car6];
let licences = ['AB5709D', 'TZ927BD', 'VB917OD', 'RMW45M', 'RWM7BD'];

for (i = 0; i <5; i++) {
    Object.assign(cars[i], car);
}

for (i = 0; i < 5; i++) {
    cars[i].licensePlate = licences[i];
}
console.log(cars);


/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise
*/
/* WRITE YOUR CODE HERE */
let carsForRent= [car, car2, car3, car4, car5, car6];
//console.log(carsForRent);

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/
/* WRITE YOUR CODE HERE */
carsForRent.pop();
carsForRent.shift();
//console.log(carsForRent);


/* EXERCISE 11
Print in the console, the types of a single car, of the car licensePlate and of the brand*/
/* WRITE YOUR CODE HERE */
let features= [car, car.licensePlate, car.brand];
for(let i=0; i<3; i++){
    console.log(typeof features[i]);
}


/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays */
/* WRITE YOUR CODE HERE */
let carsForSale = [car, car2, car3];
let totalCars = [carsForSale.length, carsForRent.length];
//console.log(totalCars);

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array*/
/* WRITE YOUR CODE HERE */
console.log(carsForSale);

for(i=0; i<carsForSale.length; i++){
    console.log("car", i+1)
    console.log("Brand: ", carsForSale[i].brand)
    console.log("Model: ", carsForSale[i].model)
    console.log("license plate: ", carsForSale[i].licensePlate)
    
}


/* WHEN YOU ARE FINISHED
Send the code on Discord via a message to your tutor! In the next days we'll also learn how to use GIT 
*/
