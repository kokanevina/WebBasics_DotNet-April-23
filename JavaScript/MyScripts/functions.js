

function add(num1, num2){
    return num1+num2;
}
let r=add(56,25);
console.log("Addtion of 2 numbers:"+r);

// annonymous functions

let add2 = function(num1,num2){
    return num1+num2;
}

let r2=add2(33,22);
console.log("Addtion of 2 numbers:"+r2)



function addition(...ar){
    console.log(ar);
    let sum=0;
    for(let ele of ar)
        sum=sum+ele;
    return sum;
}



let sum1=addition(12);
console.log(sum1);
let sum2=addition(45,12,3);
console.log(sum2);
let sum3=addition(12,11);
console.log(sum3);
let sum4=addition();
console.log(sum4);
let sum5=addition(5,1,7,2,3,4,5);
console.log(sum5);
