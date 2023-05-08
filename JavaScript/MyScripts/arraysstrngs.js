
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
let values=[111,12,21,222,33,123,32];
console.log(values);
values.reverse();
console.log("after reverse");
console.log(values);
values.sort();  // digit comparision
console.log("after sort");
console.log(values);  
values.sort((a,b)=>a-b); // value comparision
console.log("after sort");
console.log(values);
console.log("after reverse");
values.reverse();
console.log(values);
// arrays mutable : changeable





let name2="Vina";  // literals

let name3=new String("Vina");  // new objects

let nation="India is my Country. All Indians are my brothers and sisters";
console.log(nation.length);
console.log(nation.charAt(3));
console.log(nation.indexOf("a"));
console.log(nation.lastIndexOf("a"));
console.log(nation.indexOf("Country"));
let b=nation.startsWith("india");   // endsWith
if(b)
    console.log("Yes");
else
    console.log("No");

 let neoemp1="Surdas";
 let neoemp2="surdas";   
 if(neoemp1==neoemp2)
    console.log("equal");
else
    console.log("not equal");

// Strings are immutable : not changeable

let s1="Neosoft";
let concats=s1.concat(" Technology");
console.log(s1);
console.log(concats);

// toUpperCase, toLowerCase, substring

// Answer should be equal

let neoemp3="SurdaS";
let neoemp4="surDaS";   
if(neoemp3.toLowerCase()==neoemp4.toLowerCase())
   console.log("equal");
else
   console.log("not equal");

nation="India is my Country. All Indians are my brothers and sisters";

let ss1=nation.substring(4, 10);
console.log(ss1);
let ss2=nation.substring(4);
console.log(ss2);
let ss3=nation.substring(-4); // 0
console.log(ss3);
let ss4=nation.substring(-4,4); // 0,4
console.log(ss4);
let ss5=nation.slice(4, 10);
console.log(ss5);
let ss6=nation.slice(4);
console.log(ss6);
let ss7=nation.slice(-4); // t, end of string
console.log(ss7);

let ss8=nation.slice(-4,-10);  // empty 
console.log(ss8);
let ss9=nation.slice(-10,-4);  
console.log(ss9);
let ss10=nation.slice(3,-4);  
console.log(ss10);


let emps=["Hari",'Pari','Kishan','hirak','Sonali','Hitesh', 'Girish']
// Display Employees starting with letter H/h from above array

// Display first matching employee whose name ends with i

// Create a function which will take above array as input and returns new array having names 
//which contain "ri" in their name anywhere