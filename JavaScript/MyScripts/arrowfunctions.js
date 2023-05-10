let addition= function(num1,num2){
    console.log(num1+num2);
}

let arrowfun1= (num1,num2)=>{
    console.log(num1+num2);
}

arrowfun1(56,34);
//1. if arrow function have single stmt in body then {} are optional

let arrowfun2= (num1,num2)=>console.log(num1+num2);
arrowfun2(11,22);

let arrowfun3=(num)=> {return num*num*num;}
//2. if that single stmt is return stmt then return keyword not allowed. function will 
//automatically return the result
arrowfun3=(num)=> num*num*num;
let result=arrowfun3(3);
console.log(result);
// if arrow function taking single parameter then () are optional
arrowfun3=num=> num*num*num;

//Q. implement arrow function to return sum of array elements. array should be passed to a function
