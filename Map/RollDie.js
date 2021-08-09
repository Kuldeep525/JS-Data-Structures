/* Problem : Write a program in the following steps
 *           a. Roll a die and find the number between 1 to 6
 *           b. Repeat the Die roll and find the result each time
 *           c. Store the result in a dictionary 
 *           d. Repeat till any one of the number has reached 10 times
 *           e. Find the number that reached maximum times and the one that was for minimum times
 */

let map = new Map();
let oneCount = 0 , twoCount = 0 , threeCount = 0  , fourCount = 0  , fiveCount = 0  , sixCount = 0 ;
let maxCount = 10; 
let count  = 1; 
let flag = true ; 
while(flag){
    let rollDie = Math.floor(Math.random() * 7);
    switch(rollDie){
        case 1 :
            if(oneCount == maxCount){
                flag = false;
            }
            if(flag == true ){
                oneCount += 1;
            }
            console.log("one");
            break;
        
            case 2 :
                if(twoCount == maxCount){
                    flag = false;
                }
                if(flag == true ){
                    twoCount += 1;
                }
                break;    
               
            case 3 :
                if(threeCount == maxCount){
                    flag = false;
                }  
                if(flag == true ){                    
                   threeCount += 1;
                    }
                break;  
            case 4 :
                if(fourCount == maxCount){
                    flag = false;
                }  
                if(flag == true ){                                    
                    fourCount += 1;
                    }
                break;  
            case 5 : 
                if(fiveCount == maxCount) {
                    flag = false;
                }
                if(flag == true){
                    fiveCount += 1;
                }
             case 6 : 
                if(sixCount == maxCount) {
                    flag = false;
                }
                if(flag == true){
                    sixCount +=  1;
                }        
    }
}
count++;


map.set(1,oneCount);
map.set(2,twoCount);
map.set(3,threeCount);
map.set(4,fourCount);
map.set(5,fiveCount);
map.set(6,sixCount);

console.log(map);

max = 0;
maxKey = null; 
minKey = null;
min = 10 ;

map.forEach(function(value , key) {
    if(max < value){
        maxKey = key ;
        max = value;
    }
    if(min > value){
        minKey = key;
        min  = value;
    }
    
})

console.log("Dice number repeated maximum time is : " + maxKey);
console.log("Dice number which repeated minimum time : " + minKey);
