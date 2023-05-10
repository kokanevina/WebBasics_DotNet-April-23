
class Employee{
    #empId;  //private
    empName;  // bydefault public
    empSalary;
    constructor(){
        this.#empId=11;
        this.empName="AA";
        this.empSalary="1000";
        console.log("in constructor");
    }
    getDetails(){
        return "id:"+this.#empId+"  name:"+this.empName+"  salary:"+this.empSalary
    }
    getDetails1(){
        return `Id:${this.#empId} Name:${this.empName} Salary:${this.empSalary}`;
    }

    get eid(){
        return this.#empId;
    }
    set eid(empId){
        this.#empId=empId;
    }
}
let emp1=new Employee(); // default constructor
//console.log(emp1.#empId);
console.log(emp1.eid);  // get property
//emp1.#empId=345;
emp1.eid=345;  // set property
emp1.empName="Hari";
emp1.empSalary="78000";

//console.log(emp1.#empId);
console.log(emp1.eid);

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

// arrow function
// find, filter, map, reduce methods

//Q. create array of employee ids. Implement user defined method which will take this array as
//input and returns new array having ids prefixed with string neo
// example [456,567]==>[neo-456,neo-567]


let stud4=new Student(44,'Kiran','3rd');
console.log(stud4.studId)
console.log(stud4.studName)
console.log(stud4.studStandard)

for(let key in stud4)
    console.log(stud4[key]);

// Q. Create Book class and create 5 objects of Book. Store 5 Book objects in Array
//1. Iterate array using forEach
//2. Find Java Books using filter
//3. Find book with id 345 using find
//4. Make sum of Book prices using reduce
//5. Double the price of book using map