//let students=["Prakash", "Vijay","Ashish", "Via", "Adarsh "];
//console.log(students);

// Adding different types of data 
// Arrays can store multiple data types , including numbers, strings , other arrays, and objects.

//  let mixed =["prakash",43,[12,34,55],{schoolname: "SIES"}];
//  console.log(mixed);

// Accessing the array elements

// console.log(students[1]);
// console.log(mixed[3]);
// console.log(mixed[2]);

// // itrating over arrays
// for(let name of students){
//     console.log(name);
// }

// modifying arrays

// adding element
// students.push("Rohan");// adds element in the last
// console.log(students);

// // removing 

// students.pop(); // removes the element from the last
// console.log(students);


// students.shift();  // removes the first element
// console.log(students);

// students.splice(1,1); // removes one element at index 1
// console.log(students);

function func() {
	// Original Array
	var arr = [23,56,87,32,75,13];
	// Extracted array
	var new_arr = arr.slice(2,4);
    // slice(2,4) means after 2 till 4
	console.log(arr);
	console.log("<br>");
	console.log(new_arr);
}
func();



// function func(){
//     var arr =[ 23,12,45,65,76,87,99];
//     var new_arr= arr.slice(2,4);
//     console.log(arr);
//     console.log(new_arr);
// }
// func();



// 
// function fun(){
//     var a=[34,234,567,4];
//     var popped=a.pop(); // assign the popped element to popped
//     console.log(popped);// prints the popped element
//     console.log(a);
// }
// fun();

