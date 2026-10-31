//  We are given aray of marks of students , filter out of the marks of students that scored 90+.

//  let marks=[98,44,6,99,77,66,90,91,33,55,44];

// let topper =marks.filter((val)=>{
//     return val >90;
// })
// console.log(topper);


// take a number n as input form user . create an array of numbers from 1 to n. use the reduce method to calculate sum of all numbers in the array. use the reduce method to calculate product of all numbers in the array.


let n = prompt("enter a number : ");
let arr =[];
for (let i=1; i=n; i++){
    arr[i-1]= i;
}
console.log(arr);

let sum = arr.reduce((result, curr)=>{
    return result  + curr;
});
console.log("sum=",sum);


let factorial = arr.reduce((result, curr)=>{
    return result  * curr;
});
console.log("factorial=",factorial);