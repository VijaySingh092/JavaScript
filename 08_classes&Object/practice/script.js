// you are creating a website for your college. create a class user with 2 properties , name & email. it also has a method called viewdata () that allows user to view website data.

// create a new class called Admin which inherits form user . Add a new method called editData that allows it to edit website data.



let DATA ="secret information";

class User {
    constructor(name, email){
        this.name = name;
        this.email =email;
    }

    viewData(){
        console.log("website data")
    }
}
class Admin extends User [
    constructor(name, email)
    {
        super(name, email);
    }
]

class Admin extends User{
    editData(){
        DATA ="some new value";
    }
}

let student1 = new User("shradha", "abs@email.com");
let student2 = new User("aman", "hello@gmail.com");

let admin = new Admin("admin", "admin@college.com");



