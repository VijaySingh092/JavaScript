//for loop
//    initilize   stoping cond  updation
//    for (let i=1; i<=5;          i++){
//     console.log('apna college');
// }

// let sum =0;
// for (let i=1;i<=5;i++){
//     sum= sum+i;
// }
// console.log("sum=",sum);  // output is 15 , 0+1,1+2,3+3,6+4,10+5

//while loop the stopping conditon is checked in the starting

// let i=1;
// while(i<=5){
//     console.log("i=",i);
//     i++;
// }

// do while the stopping condition is checked at the last therefore there is a garauntee that the program will run for atleast one time

// let i =20;
// do{
//     console.log("apna college");
//     i++
// } while (i<=10);

// for of    loop help apply loop on strings and array
// This is a for...of loop. The for...of loop is used to iterate over iterable objects (like arrays, strings, etc.) in JavaScript.

let str="apnacollege";
for (let i of str){
    console.log(i);
}



// for in   loop is used in objects and arrays
// Not all objects are iterable. For instance, a simple object (e.g., { name: 'Alice', age: 25 }) is not iterable because you can't directly loop over its properties like you would with an array or string.

//However, you can use for...in to loop over the keys of an object, but that's a different concept from iteration over iterable objects like arrays or strings.

let student ={
    name :"Rahul Kumar",
    age: 20,
cgpa: 7.5,
isPass: true
};
 
for (let key in student ){
    console.log("key=",key, "value=",student [key]);
}