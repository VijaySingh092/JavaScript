// artimetic operators
// prompt() returns string and when we perform arithmetic operations with strings and numbers , js will perform type coercion


//JavaScript uses type coercion when you perform operations between different types, meaning it will attempt to automatically convert values to the most appropriate type for the operation being performed.

// let a = prompt("enter first number:");
// a=Number(a);
// console.log("a=",a);
// let b=21;
// console.log("a-b=",a-b);//sub
// console.log("a+b=",a+b);   // add
// console.log("a*b=",a*b);   //multiplication
// console.log("a/b=",a/b);  //divide
// console.log("a%b=",a%b);  //modulus
// console.log("a**b=",a**b);  //exponational means a raise to the power b

//unary operators

// a++;              //a++=a+1 increment
// console.log("a++=",a);

// b--;            //b--=b-1  decrement
// console.log("b--=",b);

// ++a;
// ++b;
// console.log("++a=",a);
// console.log("b++=",b);
// // we can also increment or decrement by
// console.log(a++); // will print the value of a without increment , because a is in front
// console.log(a);// will print the incremented value of a 
// console.log(--b);// will print the decremented value of b 
// console.log(b);// will print the same decremented value of b



//Assignment operators

//let d=8;
// let e=7;
// d +=4;  // d += 4 means d=d+4
// console.log("d=",d);

// console.log("8==7",a==b);
// console.log("8!=7",a!=b);

//  let x=5;
//  let g="5";
//  console.log("x==g",x==g); // true 
//  console.log("x===g",x===g); // false

// logical operators

//  let a=6;
//  let b=5;

//  let cond1 = a>b;
//  let cond2 = a===6;
//  console.log("cond1 && cond2=", cond1 && cond2);

//conditionla statements

//if statement 

//  let age =6;

//  if (age>18){
//      console.log("you can vote");
//  }
//  if (age < 18) {
//      console.log("you can not vote");
//  }

// let mode ='dark';
// let color;
// if(mode === "dark"){
//     color="black";
// }
// if(
//     mode ==="light"
// ){
//     color ="white";
// }
// console.log(color);


// if else statement

// let mode ="light";
// let color;
// if (mode=== "dark"){
//     color= "black";
// }
// else{
//     color="white";
// }
// console.log(color);



// else if 

// let mode = "green";
// let color;
// if (mode==="dark"){
//     color="black";
// }else if (mode=="blue"){
//     color="blue";
// }else if (mode == "pink"){
//     color="pink";
// }
// else {
//     color="white";
// }
// console.log(color);




//     Ternary Operators

//   condition ? true output : false output;
// let age =114;

// let result =age >=18 ? "adult": "not adult";
// console.log(result);


let ano = function(){
    console.log("hello world");
}