// Problem 5. Take a range from 0 – 100, find the digits that are repeated twice like 33, 77,etc and store them in an array

let arrayOfNumber = [];
for(i = 0 ; i <= 100 ; i++){
   let a = i % 11 ;
   if(a == 0){
       arrayOfNumber.push(i);
   }
}
console.log(`repeated number from 1 to 100 are : ${arrayOfNumber}`);
