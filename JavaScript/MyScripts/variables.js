// variables
// loosely typed lang, dynamically typed lang
// interpreted lang

var num2;
num2=78;//number
console.log("datatype is:"+ typeof num2);
num2="hello";
console.log("datatype is:"+ typeof num2);
num2=56.7;
console.log("datatype is:"+ typeof num2);
var num2=false;
console.log("datatype is:"+ typeof num2);

//in same scope var type variables can be redeclared

let i=1;
//let i=1;
while(i<=5){
    console.log(i);
    i++;
}
for(let j=5;j>=1;j--){
    console.log(j);
}

let myArray=[34,12,56,35,9,78,12,11];

//for of loop
    //1. forward, 0 to end of the array
console.log("Normal for loop");
for(let ai=0;ai<=myArray.length-1;ai++){
 console.log(myArray[ai]);
}
console.log("For of loop");

for(let ele of myArray){
console.log(ele);
}
console.log("event elements");
for(let ele of myArray){
    if(ele%2==0)
        console.log(ele);
}

const pie=3.142;
//pie=3.14; can not change the value of const variables