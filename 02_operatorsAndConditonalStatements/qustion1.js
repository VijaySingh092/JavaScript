// get user to input a number using prompt ("Enter a number:"). Check if the number is a multiple of 5 or not.

//prompt() is a built-in method that displays a dialog box that prompts the user to enter some input. It's commonly used for simple user interaction on web pages.

// ==(loose equality) compares values after performing type coercion . this means js tries to convert the values to the same type before comparing them

console.log(5=="5");// true 

//=== (strict equality): Compares both value and type, meaning no type coercion is performed. Both the value and type must be exactly the same.
console.log(5==="5"); // false


let num = prompt("enter a number:");
num = Number(num);
 if(num %5 === 0){ 
     console.log(num, "is a multiple of 5");
 }
 else{
     console.log(num,"is Not a multiple of 5");
 }


let userinput = prompt("enter name:","abc"); // prompt used to ask user for input   
// abc is the default text that will appear in the dialog box which we can easily overwrite
console.log(userinput); // print the input taken from user in the console of browser
console.log("the name entered is" ,userinput);
