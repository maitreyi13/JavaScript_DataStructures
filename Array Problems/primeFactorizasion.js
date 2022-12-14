/*
Extend the Prime Factorization Program to store all the Prime Factors of a
number n into an array and finally display the output.
*/
let primeFactorsArray = new Array();

const readline = require("readline-sync");
let n = parseInt(readline.question("Enter the number: "))
console.log(`The Prime Factors for ${n} are: `);
for(i =2; i<=n; i++){
    while(n%i == 0){
        primeFactorsArray.push(i);
        n = n/i;
    }
}
console.log(primeFactorsArray);