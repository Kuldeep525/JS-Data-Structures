/*
 * Problem : Write a Program to generate a birth month of 50 individuals 
 *           between the year 92 & 93. Find all the individuals having birthdays 
 *           in the same month. Store it to finally print.
*/
let map  = new Map();
let maxCount = 50;
let janCount = 0 , febCount = 0 , marCount = 0 , aprCount = 0 , mayCount = 0 , junCount = 0 , julCount = 0 , 
    augCount = 0 , sepCount = 0 , octCount = 0  , novCount = 0 , decCount = 0 ;

let count = 0 ; 
while(true){

    if(count == maxCount){
        break;
    }

    let birthMonth = Math.floor(Math.random() * 13);
    switch(birthMonth){
        case 1 : 
            janCount++;
            break;
        case 2 : 
            febCount++;
            break;
        case 3 : 
            marCount++;        
            break;
        case 4 : 
            aprCount++;
            break;
        case 5 : 
            mayCount++;
            break;
        case 6 :
            junCount++;
            break;
        case 7 :
            julCount++;
            break;
        case 8 :
            augCount++;
            break;
        case 9 :
            sepCount++;
            break;
        case 10 :
            octCount++;
            break;
        case 11 :
            novCount++;
            break;
        case 12 :
            decCount++;
            break;
        default :
            break;


    }

    count++;
}


map.set(1,janCount);
map.set(2,febCount);
map.set(3,marCount);
map.set(4,aprCount);
map.set(5,mayCount);
map.set(6,junCount);
map.set(7,julCount);
map.set(8,augCount);
map.set(9,sepCount);
map.set(10,octCount);
map.set(11,novCount);
map.set(12,decCount);
map.set(13,"kuldeep");

console.log(map);