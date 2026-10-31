// setTimeout(() =>{
//     console.log("hello");
// }, 4000);      // timeout

// function sum(a, b){
//     console.log(a+b);
// }

// function calculator(a, b, sumCallback){
//      sumCallback(a, b);
// }

//calculator(1, 2,sum);    // in this function sum is the callback . these callback functions are not executed with the () perenthesis


// function getData(daId, getNextData){
//     setTimeout (() =>{
//         console.log("data", dataId);
//         IdleDeadline(getNextData){
//             getNextData();
//         }
//     },2000);
// }


// callback hell

// getData(1,()=>{
//     console.log("getting data2 ...");
//     getData(2,() =>{
//         console.log("getting data3 ...");
//         getData(3,()=>{
//         console.log("getting Data4 ...");
//     getData(4);
//     });
//     });
// });



//  PROMISE

let promise = new Promise((resolve, reject) => {
    console.log("i am a promise");
    reject("something something");
});

