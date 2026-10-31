// Q- for a given array with marks of students -> [85,97,44,65,76] find the average marks of the entire class
// for of  loop

let marks =[85,97,44,65,76];
let sum = 0;

for ( let val of marks)  // using for of loop {marks is the name of array }
    {
    sum = sum+val;
}
let avg = sum/marks.length;
console.log(`avg marks of the class =${avg}`);