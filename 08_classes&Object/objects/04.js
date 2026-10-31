// this keyword
// The this references the object of which the function is a property. In other words, the this references the object that is currently calling the function.

//const counter={
//    count:0,
 //   next:function(){
   //     return ++this.count; // withour using this keyword the method would not know which object's count property it should access. The this keyword allows the method to dynamically refer to the object that the method is called on (in this case, counter).
//     }
// };
// counter.next();// output: 1



//In JavaScript function binding happens using Bind() method. With this method, we can bind an object to a common function, so that the function gives different result when needed. otherwise it gives the same result or gives an error while the code is executing.

// We use the Bind() method to call a function with the this value, this keyword refers to the same object which is currently selected . In other words, bind() method allows us to easily set which object will be bound by the this keyword when a function or method is invoked.

// The need for bind usually occurs, when we use the this keyword in a method and we call that method from a receiver object, then sometimes this is not bound to the object that we expect to be bound to. This results in errors in our program.

// Now, a simple program to print the name which is called by this keyword when the function printFunc() is invoked.
var geeks = {
    name : "ABC",
    printFunc: function(){
       console.log(this.name);}
       }
    geeks.printFunc();
 //Here is no problem to access the name "ABC", this keyword bind the name variable to the function. It is known as default binding. this keyword refers geeks object.





//  Here we made a new variable function printFunc2 which refers to the function printFunc() of object geeks. Here the binding of this is lost, so no output is produced.

//  To make sure that any binding of this is not to be lost, we are using Bind() method.
//  By using bind() method we can set the context of this to a particular object. So we can use other variables also to call binded function.
 
//  var geeks = {
//     name : "ABC",
//     printFunc: function(){
//        console.log(this.name);}
//        }
       
//     var printFunc2= geeks.printFunc;
//     printFunc2();   // output:undefined


//Use bind() method in the previous example:
var geeks = {
    name : "ABC",
    printFunc: function(){
       console.log(this.name);}
       }
       
    var printFunc2= geeks.printFunc.bind(geeks);
       //using bind() 
       // bind() takes the object "geeks" as parameter//
    printFunc2();

// example
//object geeks1
var geeks1 = {
    name : "ABC",
    article: "C++"
    }
    //object geeks2
      var geeks2 = {
    name : "CDE",
    article: "JAVA"
    }
      
      //object geeks3
      var geeks3 = {
    name : "IJK",
    article: "C#"
    }
    
    function printVal(){
       console.log(this.name+" contributes about "+this.article);
       }
          
      var printFunc2= printVal.bind(geeks1);
       //using bind() 
       // bind() takes the object "geeks1" as parameter//
      printFunc2();
      
      var printFunc3= printVal.bind(geeks2);
      printFunc3();
      
      var printFunc4= printVal.bind(geeks3);
      printFunc4();
      //uniquely defines each objects