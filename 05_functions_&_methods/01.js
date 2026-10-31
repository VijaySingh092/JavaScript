// pure functions
// A pure function has the following characteristics:

// Takes Input (Arguments): It should accept parameters and use those inputs to produce a result.
// Returns a Value: It always returns a value.
// No Side Effects: The output of the function should not depend on any external state or variables outside of its scope. This means the function should not modify any external state (like global variables or passed-in objects/arrays).
// Deterministic: Given the same input, a pure function will always return the same output. This predictability is a key aspect of pure functions.


// Example of a Pure Function

// function doubleValue(number){
//     return number *2;
// }
// const result = doubleValue(5);
// console.log(result);
//This function is pure because:
// It takes an input (number).
// It returns a value (number * 2).
// It doesn't modify any external variables.
// The result is always the same for the same input.




// impure function
// const multiplier=4;
// function value(number){
//     return number*multiplier;
// }
// const res = value(5);
// console.log(res);

//This function is impure because:
// It relies on an external variable (multiplier).
// If multiplier changes, the output changes even if the input (number) stays the same.
// It’s no longer predictable since it depends on external state.


//Avoiding mutaion
//Another characteristic of pure functions is that they do not mutate their input values. 
// 
// 

// Let's consider an example that mutates an array:
// function appendNumbers(arr){
//     arr.push(5,6);
//     return arr;
// }
// const numbers=[1,2,3,4];
// const result=appendNumbers(numbers);
// console.log(result);


// making it pure
// function appendNumbers(arr){
//     const newArr=[...arr,5,6];
//     return newArr;
// }
// const numbers=[1,2,3,4];
// const result= appendNumbers(numbers);
// console.log(result);
// console.log(numbers);


// Assigning a function to a variable
// const printMessage=function(){
//     console.log("hello world");
// };
// printMessage();


// passing a function as an Argument to another function
// function wrapperFunction(){
//     return "welcome to GeeksForGeeks";
// }
// function greetMessage(wrapper,name){
//     const message=wrapper();
//     console.log(`${name},${message}`);
// }
// greetMessage(wrapperFunction,"Prakash");


// returning a function from another function

// function greetMessage(){
//     return function(){
//         console.log("Prakash,Welcome to geeksforgeeks");
//     };
// }
// const message =greetMessage();
// message();


// combining both concepts

// function calculatePower(power){
//     return function(number){
//         return Math.pow(number, power);
//     }
// }
// const square = calculatePower(2);
// const cube = calculatePower(3);

// console.log(square(4));
// console.log(cube(5));


//Applying Higher-Order Functions to Arrays

// function calculatePower(wrapper,arr){ // calls square or cube function
//     const tempArr=[]; //used to store the square or cubed values
//     for(let number of arr){ // loop on arr
//         tempArr.push(wrapper(number)); // values pushed in tempArr
//     }
//     return tempArr;
// }

// function square(number){
//     return number**2;
// }
// function cube(number){
//     return number**3;
// }
// const arr=[1,2,3,4,5];

// const squareNumbers=calculatePower(square,arr); // calls calculatePower()
// console.log(squareNumbers); // calls squareNumber

// const cubedNumbers=calculatePower(cube,arr);// calls calculatePower()
// console.log(cubedNumbers);// calls cubedNumbers




// 
// function print(){
//     console.log("hello");
// }
// print();
//IIFE | Fork Javascript
//there are Functions that are executed as soon as they are mounted, these functions are known as Immediately Invoked Function Expressions or IIFEs.

// Syntax: IIFEs follows a particular syntax as shown below.
// (function (){ 
// // Function Logic Here. 
// })();

//example-
// (function print(){console.log("hello");})();

// //example-
// function myFunc()
// {
//     console.log("Welcome to");
//     // This will be executed after executing the previous log.
//     (function() { console.log("GeeksForGeeks!"); })();
//     console.log("Hi There!");
// }
// // Calling the Function.
// myFunc();

//IIFEs can also have parameters. For example,
// Declaring the parameter required.
// (function(dt) {
//     console.log(dt.toLocaleTimeString());
//     // Passing the Parameter.
// })(new Date());


