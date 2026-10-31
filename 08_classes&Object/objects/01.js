// creating objects

// object literals is one of the simplest and most common ways to create an object in javascript
// const person={
//     name:'Prakash',
//     age:99,
//     job:'Mentor'
// };

// accessing object properties

// dot notation 
// console.log(person.name);
// console.log(person.age);

//bracket notation
//console.log(person['name']);
//console.log(person['age']);// bracket notation are useful when property names contain spaces or are dynamic

// adding and modifying properties

// person.city='new york';
// person.age=100;
// console.log(person.age);
// console.log(person.city);

//deleting properties
// delete person.job;
// console.log(person.job);

// nested object
// const user={
//     name:'john',
//     address:{
//         street:'123 Main street',
//         city:'Anytown',
//         country:'India'
//     }
// };
// console.log(user.address.country);

// object methods

// const car={
//     make:"tesla",
//     model:"modal s",
//     start: function(){
//         console.log("car started");
//     }
// };
// car.start();

// working with dynamic properties
// sometime we need to work with properties dynamically particularly when property names are determined at runtime
//const propName='make';
//console.log(car[propName]);

// multi-word property name

// const userProfile={
//     'first name':'Jane',
//     'last name': 'Doe'
    
// };
// console.log(userProfile['first name']);



//Computed Properties
//Computed properties allow you to dynamically set property names. This is particularly useful when you want to add a property to an object based on a variable value.


// const read = require(readline-sync);

// const obj={
//     name:'Prakash',
//     age:100
// };

// const key = read.question("what do you want to know about the mentor? (name,age,state):");
// obj[key]=obj[key]||'Not Available';
// console.log(obj);


const read = require('readline-sync');  
// read - This is just a variable that you assign the module to after requiring it.
const obj = {
    name: 'Prakash',
    age: 100
};


const key = read.question('What do you want to know about the mentor? (name, age, city, state): ');  
//readlineSync.question() is used to ask the user for input. The prompt message tells the user to input a key like name, age, city, or state.


obj[key] = obj[key] || 'Not Available';
//This line does two things:
//Access the property of the obj object using the value of key that the user entered (e.g., obj['name'], obj['age']).
//If the property exists (e.g., obj['name'] or obj['age']), it keeps its original value.
//If the property does not exist (e.g., if the user enters city or state), it sets the value of that property to 'Not Available' because obj[key] is undefined, and undefined || 'Not Available' results in 'Not Available'.

console.log(obj);



//

const readlineSync = require('readline-sync');

const obj = {
    name: 'Prakash',
    age: 100
};

const course = readlineSync.question('Which course do you want to learn? (HTML, CSS, JS, React, Redux): ');

// Adding a computed property to the object
obj[course] = 'Course not available';

console.log(obj);