
// console log means log (print) the output in the console
// console.log is a built in function which is used to print or display output in the browser's console(or terminal, if we are using node.js) 

console.log("hello");
console.log("java java");

console.log (age=24);  //declaration of variable age
// now everytime we print the variable print , the value of print will printed
 console.log(age);
 // we can also do the changes in the value by
 console.log(age+1);
 console.log(age*20);
 console.log(age/4);
 console.log(48/age);

// we can also decalare the variable by this-
number=1234;  // implict declaration
console.log(number);
 
// we can also assign character values to the variable
 name="harry potter";
 console.log(name);

 myname="ron";
 console.log(myname);


 // we use let, var, const to explicitly declare a variable

//  let: Block-scoped, allows reassignment
// const: Block-scoped, does not allow reassignment (but allows modification of object properties)
// var: Function-scoped, allows reassignment



// reassignment means that we reassign the values
 let fullname = "vijay singh";
 console.log(fullname);
 fullname="vijay singh khetwal";
 console.log(fullname);


 let umar ="24";   // here 24 is a string 
 console.log(umar);

 //let new = umar + 5; // this is invalid as umar has a string value and 5 is number , so we can't perform any arthmetic operation here
 //console.log(new); // this will create an error

 // since "24" is a string representation of 24, if we were to treat umar as a number (i.e, performing any arithmetic operation) then we would need to convert it into number using something like Number(umar) or parseInt(umar)

 let newUmar = Number(umar)+5; // convert the umar into number
 console.log(newUmar);



// block scoped means the varibles that are declared inside a block are only accessible within that block{}
{
    let a=5; // the value of a that is 5 is only accessible inside the block{}
    console.log(a);
}
{
    let a=0;
    console.log(a);
}

//
{
    let one=1;
    console.log(one);

 function sum(){
    let two=2;
    console.log(two);
    let three=one+two;
    console.log(three);
 }
 sum();
}

const ekek = 11;
console.log(ekek);

// creating an object 
// we create an object by using curly braces {} and add key value pairs 

 const student = {
     nam: "vijay singh",
    "last nam":"khetwal",
     age: 19,
     isPass: true,
 };
 console.log(student);

 console.log(typeof student);
 console.log(student["nam"]); // more useful when the property name has space or some special symbol like if the property name is my nam instead of nam
 console.log(student.nam);
 console.log(student["last nam"]);
