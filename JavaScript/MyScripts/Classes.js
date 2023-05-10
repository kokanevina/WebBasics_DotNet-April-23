
class Employee{
    empId;  // public 
    empName;
    empSalary;
    constructor(){
        this.empId=11;
        this.empName="AA";
        this.empSalary="1000";
        console.log("in constructor");
    }
    getDetails(){
        return "id:"+this.empId+"  name:"+this.empName+"  salary:"+this.empSalary
    }
    getDetails1(){
        return `Id:${this.empId} Name:${this.empName} Salary:${this.empSalary}`;
    }
}
let emp1=new Employee(); // default constructor
console.log(emp1.empId);

emp1.empId=345;
emp1.empName="Hari";
emp1.empSalary="78000";

console.log(emp1.empId);


let details=emp1.getDetails();
console.log(details);
console.log(emp1.getDetails1());

class Student{
    studId;
    studName;
    studStandard;

    constructor(id=0,studName="BB",standard="1st"){
        this.studId=id;
        this.studName=studName;
        this.studStandard=standard
    }
    getDetails(){
        return `Id:${this.studId} Name:${this.studName} Standard:${this.studStandard}`;
    }
}

let stud1=new Student(1,"Pooja",'8th');
console.log(stud1.getDetails());

let stud2=new Student();
console.log(stud2.getDetails());


let stud3=new Student(3,"Om");
console.log(stud3.getDetails());

// private variables
// arrow function
// find, filter, map, reduce methods