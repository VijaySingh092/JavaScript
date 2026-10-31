const student={                  // direct way to create an object
      fullName : "Vijay Singh",
      marks: 100,
      printMarks: function () {
        console.log("marks = ", this.marks);
      },                         
};

const employee ={
    calcTax(){
        console.log("tax rate is 10%");
    },
};

const karanArjun= {
    salary: 50000,
};

karanArjun.__proto__ = employee;


///

class Parent{
    hello(){
        console.log("hello");
    }
}
class child extends Parent{

}
let obj = new child ();


////

class Person{
    constructor(){
        console.log("enter parent constructor");
        this.species = "homo sapiens";
    }
    eat()
        {
        console.log("eat");
    }
}

class Engineer extends Person {
    constructor(branch){
        console.log("enter child constructor");
        super(); // to invole parent class constructor
        this.branch = branch;
        console.log("exit child constructor");
    }
    work(){
        console.log("solve problems, build something");
    }
}
let engObj = new Engineer("chemical engg");
