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


let salaryArray=[45000,23000,12000,67000,34000,78000];
let salary=50000;
console.log(salaryArray);
//find all salaries which are greater than salary : filter

let resultArray=salaryArray.filter(sal=>sal>salary);  //[67000,78000]
console.log(resultArray);

// find first matching salary which is greater than salary : find 
let resultvalue=salaryArray.find(sal=>sal>salary); // 67000
console.log(resultvalue);

let idArray=[567,234,122,444,6677];
// output should be : [neo-567,neo-234, neo-122, neo-444, neo-66777] : map

let mappedArray=idArray.map(id=>"neo-"+id); 
console.log(mappedArray);

let ageArray=[2,1,3,1,6,8];
// sum of array elements n==>1  : reduce

let sum=ageArray.reduce((acc,age)=>acc+age);
//initial value in acc is 0 index element    2
// initial value in sal is 1 index element    1
console.log(sum);  // 21
//acc=20    //41
let sum1=ageArray.reduce((acc,age)=>acc+age,20);
//initial value in acc is passed value   20
// initial value in sal is 0 index element    2
console.log(sum1);

// forEach