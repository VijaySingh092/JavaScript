let marks =[93, 45, 64, 12, 44];  // representation of array

console.log(marks);  
console.log(marks.length);  //print the length of array

console.log(marks[0]);       // access the element of index 0

marks[0]=99;              // the element using the index
console.log(marks);


//      Looping over an Array

// for loop  - known value is length

let heroes =["ironman", "thor", "hulk", "shaktiman", "antman"];


    // loop begin with the index 0 and continue till the idx value is less than the length. Length is number of elements and index begins with the 0 therefore length is greater than the biggest index number 
for (let idx = 0; idx < heroes.length; idx++){
    console.log(heroes[idx]);
}

// for of 
for (let hero of heroes){
    console.log(hero);
}
