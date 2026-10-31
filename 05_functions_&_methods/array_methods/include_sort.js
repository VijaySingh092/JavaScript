//Array includes() Method

//The array.includes() method is used to know either a particular element is present in the array or not and accordingly, it returns true or false i.e, if the element is present, then it returns true otherwise false.

//var A =[1,23,4,5];
//a = A.includes(2);
//console.log(a);
//console.log(A.includes(2));

//Array sort() Method

//The arr.sort() method is used to sort the array in place in a given order according to the compare() function. If the method is omitted then the array is sorted in ascending order.
// syntax :  arr.sort(compareFunction)


// function func(){
//     var arr=["Geeks","for","Geeks"];
//     console.log(arr);
//     console.log(arr.sort());
// }
// func();

// var arr=[2,5,8,1,4];
// console.log(arr.sort(function(a,b){
//     return a+2*b;
// }));
// console.log(arr);

// merging
// const arr1=[1,2,3,4];
// const arr2=[6,7,8,9];
// const mergedArr=[...arr1,...arr2];
// console.log(mergedArr);


// adding elements while merging 
//const add_elements=[...arr1,5,...arr2,10,8,12,];
//console.log(add_elements);

// using split function = the split method splits a string into an array of substrings based on a specified separator.
//Syntax: 
//str.split(separator, limit)
//separator: It is used to specify the character, or the regular expression, to use for splitting the string. If the separator is unspecified then the entire string becomes one single array element. The same also happens when the separator is not present in the string. If the separator is an empty string (“”) then every character of the string is separated.
//limit: Defines the upper limit on the number of splits to be found in the given string. If the string remains unchecked after the limit is reached then it is not reported in the array.
//Return value: This function returns an array of strings that is formed after splitting the given string at each point where the separator occurs.

// let str="hello how are you";
// let array=str.split("");
// console.log(array);


//Array join() Method

// The arr.join() method is used to join the elements of an array into a string. The elements of the string will be separated by a specified separator and its default value is a comma(, ).

// function func(){
//     var a= [1,2,3,4];
//     console.log(a.join());
// }
// func();

// function str(){
//     let a= ["h","e","l","l","o"];
//     console.log(a.join());
// }
// str();

// itearation

let studentsName = ["rahul" , "riya" , "sumit" , "aryan"];
let arrLength = studentsName.length
for(let i = 0 ; i<arrLength ; i++){
console.log(studentsName[i]) 

}