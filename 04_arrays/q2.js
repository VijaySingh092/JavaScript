// Q for a given array with prices of 5 items-> [250,645,300,900,50] All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

// using for of loop

let items =[250,645,300,900,50];

// let i =0;

// for(let val of items ){
//     let offer = val/10;
//     items [i]= items [i] - offer;
//     console.log(`value after offer = ${items[i]}`)
//     i++;
// }

// using for loop

for (let i=0; i<items.length; i++){
let offer = items[i]/10;
items[i] -= offer ;
}
console.log(items);
