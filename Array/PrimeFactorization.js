//Problem 3. Extend the Prime Factorization Program to store all the Prime Factors of 

number n into an array and finally display the output.
const prompt = require('prompt-sync')();
let isPrime = 0 ; 
let arrayOfPrimeNumber = [];
let number = parseInt(prompt("Enter the number "));

for(i = 2 ; i <= number ; i++){
    let a = number%i ;
    if(a == 0){
        isPrime = 1;
        for(j = 2 ; j <= i/2 ; j++){
            let b = i % j;
            if(b == 0 ) {
                isPrime = 0;
                break;
            }
        }
        if(isPrime == 1 ){
            arrayOfPrimeNumber.push(i);
        }
    }
}

if(isPrime == 1 || isPrime == 0){
    console.log(arrayOfPrimeNumber);
}
