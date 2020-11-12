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

const Nums = [34,25,67,84,3];

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

const Mycredentials = {
    name : 'Massilia',
    Surname :'Tazit',
    email : 'massilia.tazit@hotmail.com',
    age : 25

}
console.log(Mycredentials);
/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license
*/

Mycredentials['has driving license'] = true;

/* EXERCISE 4
Remove from the previously created object the age
*/

delete Mycredentials.age;
console.log(Mycredentials);


/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address
*/

const user1 = {

     name : 'Joel',
    Surname :'Gracia',
    email : 'joel.gracia@gmail.com',
}

console.log(Mycredentials.email !== user1.email ? true : false);

/* EXERCISE 6
You are working for an eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50€, they can have free shipping (otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.
*/
const shopping_cart = 80;
const shipping_cost = 10;
//const totalCost =  shopping_cart > 50 ? shopping_cart : shopping_cart + 10;
//console.log(totalCost);

if (shopping_cart > 50){
    
    console.log('Your shipping is free you will pay: ' + shopping_cart);

}
else{

    totalCost=shopping_cart + shipping_cost;
    console.log('You will pay a total of: ' + totalCost)
}


/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.
*/
if (shopping_cart > 50){
    totalCost = shopping_cart - (shopping_cart * 0.2 );
    console.log('your shipping is free and you got a black friday discount you will pay: '+ totalCost);

}
else{

    totalCost = (shopping_cart - (shopping_cart * 0.2)) + shipping_cost;
    console.log('You got a black friday discount, you will pay a total of: ' + totalCost)
}


/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it and change the licensePlate without affecting the original car.
Do it for five cars.
*/

const car = {
brand : 'BMW',
model : '316i',
licensePlate : 'SSSD2344'

};
car1= Object.assign({},car);
car2= Object.assign({},car);
car3=Object.assign({},car);
car4=Object.assign({},car);
car5=Object.assign({},car);

car1.licensePlate = 'DFHVD2233';
car2.licensePlate = 'DFgdg5536';
car3.licensePlate = 'DFHP0949';
car4.licensePlate = 'DEVD8883';
car5.licensePlate = 'SBH990033';

console.log(car1);
console.log( car2);
console.log( car3);
console.log( car4);
console.log( car5);


/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise
*/

const carsForRent = [car1,car2,car3,car4,car5];

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

carsForRent.shift();
carsForRent.pop();
console.log(carsForRent);

/* EXERCISE 11
Print in the console, the types of a single car, of the car licensePlate and of the brand
*/ 
//here we use typeof

console.log(typeof car.licensePlate);
console.log(typeof car.brand);
console.log(typeof car.model);


/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays
*/

const carsForSale = carsForRent.slice(0,4);

const totalCars = carsForSale.length + carsForRent.length;

console.log(totalCars);
console.log(carsForSale)


/* EXERCISE 13
Print in the console the data from each car in the carsForSale array
*/
for (i=0; i< carsForSale.length;i++){


    console.log((i + 1) + "#Car")
    console.log("Brand: ", carsForSale[i].brand)
    console.log("license Plate: ", carsForSale[i].licensePlate)
    console.log("model: ", carsForSale[i].model)



}


/* WHEN YOU ARE FINISHED
Send the code on Discord via a message to your tutor! In the next days we'll also learn how to use GIT 
*/
