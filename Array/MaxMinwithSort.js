// problem 2. extend the above program using sorting 

let arrayOfRandomNumber = [];
for(i = 0 ; i <= 10 ; i++){
    let randomNumber = Math.floor(Math.random() * 999);
    arrayOfRandomNumber.push(randomNumber);
}
arrayOfRandomNumber.sort();
console.log("sorted array : " +arrayOfRandomNumber);
console.log("secondMax : " +arrayOfRandomNumber[9]);
console.log("secondMin : " +arrayOfRandomNumber[1]);
