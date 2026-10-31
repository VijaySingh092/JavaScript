// Q- create an array to store companies -> "Bloomberg", microsoft uber google ibm netflix.   a. remove the first company from the array  b. remove uber & add ola in its place   c. add amazon at the end


let companies=["bloomberg","microsoft","uber","google","ibm","neflix"];

console.log(companies)
//companies.shift();    // removes the element from the start ie bloomberg

companies.splice(2,2,"ola",);   // removes the uber with ola , 2 ia the index at which to start modifying the array. Here it starts at the index 2 and 1 is the second argument that specifies the number of elements to remove starting from index 2 
// third argument is ola that speciefies that ola should be added at he same index where uber was removed
console.log(companies);
companies.splice(4,2,"hello","one","two"); 
companies.push("amazon");
console.log(companies);