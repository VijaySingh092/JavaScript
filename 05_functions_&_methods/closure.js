//A function bundled with it's lexical scope forms a closure. Because of closure inner function can have access to outer functions scope.

// lexical scope refers to the scope in which a function or variable is defined . this means that the location of a function or variable within the code determines the scope in which it can be accessed.

//In other words, closure is created when a child function keep the environment of the parent scope even after the parent function has already executed

//example-1
// function foo(){
//     var b=1;
//     function inner(){
//         return b;
//     }
//     return inner;
// }
// var get_func_inner=foo();
// console.log(get_func_inner());
// console.log(get_func_inner());
// console.log(get_func_inner());


//example-2
function foo(outer_arg){
    function inner(inner_arg){
        return outer_arg + inner_arg;
    }
    return inner;
}
var get_func_inner = foo(5);
// when we call get_func_inner(4) or get_func_inner(3), we are not directly calling foo(). Instead we are calling the inner function that was returned by foo(5)

console.log(get_func_inner(4));
console.log(get_func_inner(3));