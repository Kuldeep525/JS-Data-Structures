// Problem 4. Write a Program to show Sum of three Integer adds to ZERO
const prompt = require('prompt-sync')();
let arrayOfNumber = [];
let number = parseInt(prompt("Enter the total numbers"));
i = 0 ; 
while(i < number){

    arrayOfNumber[i] = parseInt(prompt("enter the i+1 "));
    i++;

}
let found = false ;
for(i = 0 ; i <= number - 2 ; i++){

    for(j = i+1 ; j <= number - 1 ; j++){

        for(k = j+1; k < number ; k++ ) {

            let a = arrayOfNumber[i];
            let b = arrayOfNumber[j];
            let c = arrayOfNumber[k];
            let sum = a + b + c ;
            if(sum == 0 ){
                console.log(`Triplets are : " ${a}  ${b}  ${c} `);
                found = true;
            }

        }
    }
}
if(found == false){
    console.log("no triplet found ");
}
