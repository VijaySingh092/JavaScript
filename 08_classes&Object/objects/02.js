// shallow copy:A shallow copy creates a new object but does not recursively copy nested objects. Instead, it copies references to the original nested objects

// const person1={
//     name:'Prakash',
//     age:30,
//     address:{
//         city:"Mumbai",
//         state:"Maharastra"
//     }
// };

// const person2=person1;

// console.log(person1.name);
// console.log(person2.name);
// person2.name="pawan";
// console.log(person1.name);
// console.log(person2.name);


// deep copy:A deep copy creates a new object and recursively copies all properties of the original object, ensuring that there are no shared references between the original and the new object.

// methods to create deep copy

//using JSON methods


// const person1={
//     name:'Prakash',
//     age:30,
//     address:{
//         city:"Mumbai",
//         state:"Maharastra"
//     }
// };


//const person2=JSON.parse(JSON.stringify(person1)); // this line creates a deep copy of person1 and assigns it to person2
//JSON.stringify(person1) converts person1 into a JSON string.
// JSON.parse(), then parses/converts that string back into a new object 
//  the method JSON.parse() is used to convert a JSON-formatted string (which is just text) into a JavaScript object.
// person2.name="Ashish";
// person2.address.city="Sirsa";
// console.log(person1.name);
// console.log(person1.address.city);
// console.log(person2.name);
// console.log(person2.address.city);

//Object.assign

// NOTE: However, when using Object.assign with nested objects, the nested objects are still copied by reference, leading to unexpected behavior:
// const person1 = {
//     name: 'Prakash',
//     age: 101
// };

// const person2 = Object.assign({}, person1); // Shallow copy
// person2.name = 'Ashish';

// console.log(person1.name); // Output: Prakash
// console.log(person2.name); // Output: Ashish


// Spread operator 
// const person1 = {
//     name: 'Prakash',
//     age: 101,
//     address: {
//         city: 'Mumbai',
//         state: 'Maharashtra'
//     }
// };

// const person2 = { ...person1 }; // Shallow copy
// person2.name = 'Ashish';
// person2.address.city = 'Sirsa';

// console.log(person1.name); // Output: Prakash
// console.log(person2.name); // Output: Ashish
// console.log(person1.address.city); // Output: Sirsa
// console.log(person2.address.city); // Output: Sirsa


// Using a custom deep copy function

// function deepCopy(obj) {
//     if (obj === null || typeof obj !== 'object') {
//         return obj;
//     }
//     const copy = Array.isArray(obj) ? [] : {};
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             copy[key] = deepCopy(obj[key]);
//         }
//     }
//     return copy;
// }

// const person1 = {
//     name: 'Prakash',
//     age: 101,
//     address: {
//         city: 'Mumbai',
//         state: 'Maharashtra'
//     }
// };

// const person2 = deepCopy(person1); // Custom deep copy
// person2.name = 'Ashish';
// person2.address.city = 'Sirsa';

// console.log(person1.name); // Output: Prakash
// console.log(person2.name); // Output: Ashish
// console.log(person1.address.city); // Output: Mumbai
// console.log(person2.address.city); // Output: Sirsa




// Optional Chaining
//The optional chaining ‘?.’ is an error-proof way to access nested object properties, even if an intermediate property doesn’t exist.
//Optional chaining allows you to safely access nested properties. It uses the ?. syntax to check if a property exists before trying to access it.

// const user = {
//     name: 'Prakash',
//     // address: {
//     //     street: '123 Main St',
//     //     city: 'Mumbai'
//     // },
//     // likes: ['reading', 'traveling']
// };
// console.log(user.address);
// console.log(user?.address?.city);



// // OPTIONAL CHAINING
// const userWithFunction = {
//     name: 'Prakash',
//     getDisplayMessage: function() {
//         console.log('Welcome, Prakash');
//     }
// };

// userWithFunction?.getDisplayMessage?.(); // Output: Welcome, Prakash

// const userWithoutFunction = {
//     name: 'Prakash'
// };

// userWithoutFunction?.getDisplayMessage?.(); // No output, no error




//Destructuring Object

//Destructuring is an important and frequently used concept in JavaScript, especially when dealing with complex objects or arrays, such as those returned from API responses. It allows for the unpacking of values from arrays or properties from objects into distinct variables. Let's delve into the concept and see how it can be effectively used.



// basic destructuring
const obj = {
    name: 'Prakash',
    address: {
        street: '123 Main St',
        city: 'Mumbai',
        state: 'Maharashtra'
    },
    courses: ['JavaScript', 'React', 'Node.js']
};

//Here, object destructuring is used to extract values from the obj object and assign them to individual variables.
// This syntax { name, address, courses } is a shorthand for:
// const name = obj.name;
// const address = obj.address;
// const courses = obj.courses;
// The variable names (name, address, courses) must match the property names in the object (obj) to correctly assign the values.

const { name, address, courses } = obj;
console.log(name); // Output: Prakash
console.log(address); // Output: { street: '123 Main St', city: 'Mumbai', state: 'Maharashtra' }
console.log(courses); // Output: ['JavaScript', 'React', 'Node.js']
const { address: { city, state } } = obj;
console.log(city); // Output: Mumbai
console.log(state); // Output: Maharashtra




// destructing arrays
const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3
// skipping items: You can skip items using commas:
//const [first, , third] = numbers;
//console.log(first); // Output: 1
//console.log(third); // Output: 3

// Using rest operator: To gather remaining items into a new array:
const [first, ...rest] = numbers;
console.log(first); // Output: 1
console.log(rest); // Output: [2, 3]
// renaming variables
const { name: userName, address: { city: userCity } } = obj;
console.log(userName); // Output: Prakash
console.log(userCity); // Output: Mumbai

