let arrayOfNumber = [];
for(i = 0 ; i <= 100 ; i++){
   let a = i % 11 ;
   if(a == 0){
       arrayOfNumber.push(i);
   }
}
console.log(`repeated number from 1 to 100 are : ${arrayOfNumber}`);