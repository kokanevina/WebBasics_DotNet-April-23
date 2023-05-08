
let nameArray=['hari','om','poonam','harish','girish','omsai'];
nameArray.push('pooja','kiran');
console.log(nameArray);

let cityArray=new Array('mumbai','pune',"solapur");
cityArray.push('satara');
console.log(cityArray);

let ageArray=[]; // 0 size
ageArray.push(34);
console.log(ageArray);
let salaryarray=new Array(3);
salaryarray.push(45000);
console.log(salaryarray);

salaryarray[0]=34000;
salaryarray[1]=89000;
salaryarray[2]=78000;
console.log(salaryarray);
let removed=salaryarray.pop();
console.log(salaryarray);

let emp={
    empId:0,
    empName:'Radha',
    empSalary:78000
}

let emp2={
    empId:1,
    empName:'Ram',
    empSalary:48000
}
let empArray=[];
empArray.push(emp,emp2);
console.log(empArray);

for(let employee of empArray){
    console.log(employee.empSalary);
}


let kidsages1=new Array(2);
console.log(kidsages1.length); // 2 , empty array
let kidsages2=new Array(2,1,3,2);
console.log(kidsages2.length); //4 , nonempty array

// sort string array as well as number array
// reverse array