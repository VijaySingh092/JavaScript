// hoisting
function codeHoist(){
    a = 10;
    let b = 50;
}
codeHoist();
 
console.log(a); // 10
//console.log(b); // ReferenceError : b is not defined
//Explanation: In the above code sample we created a function called codeHoist() and in there we have a variable which we did not declare using let/var/const and a let variable b. The undeclared variable is assigned the global scope by JavaScript hence we are able to print it outside the function, but in case of the variable b the scope is confined and it is not available outside and we get a ReferenceError.

//Note: There’s a difference between ReferenceError and undefined error. An undefined error occurs when we have a variable that is either not defined or explicitly defined as type undefined. ReferenceError is thrown when trying to access a previously undeclared variable. 

//Function Hoisting with Function Declarations:
myFunction(); // "Hello!"
function myFunction() {
  console.log("Hello!");
}
