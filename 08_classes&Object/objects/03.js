//What are Shorthand Properties?

//Shorthand properties simplify the syntax for defining object properties when the property name is the same as the variable name holding the value. Instead of writing both the property and its value explicitly, you can use shorthand syntax


// Consider a function that takes two parameters and returns an object:
// function getObject(name, city) {
//     return {
//         name: name,
//         city: city
//     };
// }

//const obj = getObject('Akash', 'Mumbai');
//console.log(obj); // Output: { name: 'Akash', city: 'Mumbai' }

//Using shorthand properties, we can simplify this as:
function getObject(name,city){
    return{
        name,
        city
    };
}
const obj = getObject('Akash','Mumbai');
console.log(obj);



// Example
const age = 25;
const job = 'Developer';
const student = 'Ashish';
const course = 'Redux';

// Using shorthand properties
const person = {
    age,
    job
};

console.log(person); // Output: { age: 25, job: 'Developer' }

// Logging student and course as an object
console.log({ student, course }); // Output: { student: 'Ashish', course: 'Redux' }


// example
function createStudent(name, city) {
    return {
        name,
        city
    };
}

const student1 = createStudent('Akash', 'Mumbai');
const student2 = createStudent('Ashish', 'Chennai');

console.log(student1); // Output: { name: 'Akash', city: 'Mumbai' }
console.log(student2); // Output: { name: 'Ashish', city: 'Chennai' }