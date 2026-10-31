//Shallow Copy: A shallow copy refers to creating a copy of an array or object where the copy still points to the same memory location as the original. Changes to the copy will reflect in the original.
//Deep Copy: A deep copy involves creating a completely independent copy of the array or object, such that changes to the copy do not affect the original. For arrays and objects containing only primitive types, methods like the spread operator, Array.from, and concat work well.






let studentnames =["Prakash","Ashish","Via","Adarash"];

// map -This is an array method in JavaScript that creates a new array by applying a function to each element of the original array. It does not modify the original array but returns a new one.
let uppercase = studentnames.map(name=>name.toUpperCase());
console.log(uppercase);

// filter - creates a new array with elements that pass a tast provided by a function.
let longNames = studentnames.filter(name => name.length > 5);
console.log(longNames); // Output: ["Ashish", "Adarsh"]

//Using reduce-
//it is used to reduce the array into one single value using some functional logic 
array = [ 1, 2, 3, 4, 5, 6 ];
//The reduce() method starts with acc = 0 (the initial value).
//The helperSum function is called for each element in the array. It adds the current element (curr) to the accumulator (acc), and returns the new value of acc which will be used for the next iteration.
// Step-by-step iteration:
// First iteration: acc = 0, curr = 1 → helperSum(0, 1) returns 1.
// Second iteration: acc = 1, curr = 2 → helperSum(1, 2) returns 3.
// Third iteration: acc = 3, curr = 3 → helperSum(3, 3) returns 6.
// Fourth iteration: acc = 6, curr = 4 → helperSum(6, 4) returns 10.
// Fifth iteration: acc = 10, curr = 5 → helperSum(10, 5) returns 15.
// Sixth iteration: acc = 15, curr = 6 → helperSum(15, 6) returns 21.
// Finally, the reduce() method returns the final accumulated value, which is 21.
const helperSum = (acc,curr) => acc+curr
sum = array.reduce(helperSum, 0);
 
console.log(array)
console.log(sum);

//Using some-
// it is used to check whether some array values passes a test
array = [ 1, 2, 3, 4, 5, 6 ];
 
const lessthanFourCheck = (element) => element < 4 ;
const lessthanFour = array.some(lessthanFourCheck)
 
 
console.log(array);
if(lessthanFour){
    console.log("At least one element is less than 4" )
}else{
    console.log("All elements are greater than 4 ")
}


// copy array
// problem with shallow copying

// when we assign arr1 to arr2 both variables reference the same array in the memory.
//Therefore , any changes to arr2 affect arr1 . this is due to the nature of objects and arrays in javascript being reference types.


// let arr1=[1,2,3,4,5,6];
// let arr2= arr1;
// console.log(arr1);
// console.log(arr2);

// arr2.push(4);
// console.log("updated arr1",arr1);
// console.log("updated arr2",arr2);

//using proper spread operator(...)
// The spread operator(...) is a convenient way to create a shallow copy of an array that points to a different memory location.

let arr =['a','b','c','d'];
let arr2 =[...arr];
console.log(arr);
arr2.push('e');
console.log(arr);
console.log(arr2);

// using a loop
// another way to create a copy is by manually iterating over the array and pushing elements to the new array

// let arr4=[1,2,3];
// let arr5[];
// for(let number of arr4){
//     arr5.push(number);
// }
// console.log(arr4);
// console.log(arr5);

// using array.from
// the array.from can also be used to create a shallow copy of an array

let arr6=[1,2,3];
let arr7=Array.from(arr6);
console.log(arr6);
console.log(arr7);

// using concat
// the concat method can e=be used to create a new array that includes the elements of the original array

arr8=[1,2,3];
let arr9=arr8.concat(); // properly copying the array using conat
console.log(arr8);
console.log(arr9);