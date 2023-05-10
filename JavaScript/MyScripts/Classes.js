
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


