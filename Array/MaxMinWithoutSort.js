// Problem : Write a program in the following steps
//           a. Generates 10 Random 3 Digit number.
//           b. Store this random numbers into a array.
//           c. Then find the 2nd largest and the 2nd smallest element without sorting the array.

let arrayOfRandomNumber = [];
for(i = 0 ; i <=10 ; i++){
    let randomNumber = Math.floor(Math.random() * 999);
    arrayOfRandomNumber.push(randomNumber);
    
}
Max = arrayOfRandomNumber[0];
secondMax = arrayOfRandomNumber[0];
Min = 1000;
secondMin = 1000;
for(i = 0 ; i <= arrayOfRandomNumber.length; i++){
    if(arrayOfRandomNumber[i] > Max){
        secondMax = Max ; 
        Max = arrayOfRandomNumber[i];
    }else if(arrayOfRandomNumber[i] > secondMax && arrayOfRandomNumber[i] != Max){
        secondMax = arrayOfRandomNumber[i];
    }

    if(arrayOfRandomNumber[i] < Min  ){
        secondMin = Min;
        Min = arrayOfRandomNumber[i];
    }else if(arrayOfRandomNumber[i] < secondMin && arrayOfRandomNumber[i] != Min) {

        secondMin = arrayOfRandomNumber[i];
    }
         
}


console.log("Array of 10 random number : " +arrayOfRandomNumber);

if(secondMax == Max){
    console.log(" there is no largest element");
}
else{
    console.log("Second largest element : " +secondMax);
}
if(secondMin == Min){
    console.log(" there is no smallest element");
}
else{
    console.log("Second smallest element : " +secondMin);
}

