let fnameNode=document.getElementById('firstName');
let errorNode1=document.getElementById('error1');

let commonFlag=0;

function validate1(){
    errorNode1.textContent="";
    let fname=fnameNode.value;
    let fnamePattern= new RegExp("^[A-Za-z]*$");
    fnameNode.style.border="2px red solid";
    if(fname==""){
        errorNode1.textContent="First name is required";
        return false;
    }
    else if(fname.length<2){
        errorNode1.textContent="name must contain atleast 2 characters";
        return false;
    }
    else if(fnamePattern.test(fname)==false){
        errorNode1.textContent="name must have only alphabets";
        return false;
    }
    else{
        fnameNode.style.border="2px green solid";
        return true;
    }
}

let lnameNode=document.getElementById('lastName');
let errorNode2=document.getElementById('error2');
function validate2(){
    errorNode2.textContent="";
    let lname=lnameNode.value;
    lnameNode.style.border="2px red solid";
    if(lname==""){
        errorNode2.textContent="Last name is required";
        return false;
    }
    else{
        lnameNode.style.border="2px green solid";
        return true;
    }
}

let ageNode=document.getElementById('age');
let errorNode3=document.getElementById('error3');
function validate3(){
    errorNode3.textContent="";
    let age=ageNode.value;
    ageNode.style.border="2px red solid";
    if(age==""){
        errorNode3.textContent="Age is required";
        return false;
    }
    else if(age<20 || age>40){
        errorNode3.textContent="Age must be between 20 to 40";
        return false;
    }
    else{
        ageNode.style.border="2px green solid";
        return true
    }
}
let mailNode=document.getElementById('mailId');
let errorNode4=document.getElementById('error4');
function validate4(){
    errorNode4.textContent="";
    let email=mailNode.value;
    mailNode.style.border="2px red solid";
    if(email==""){
        errorNode4.textContent="Email Id is required";
        return false;
    }
    else if(!email.includes('@')){
        errorNode4.textContent="Please enter valid EmailId";
        return false;
    }
    else if(email.endsWith('@')){
        errorNode4.textContent="Please enter valid EmailId";
        return false;
    }
    else{
        mailNode.style.border="2px green solid";
        return true;
    }
}

let userNode=document.getElementById('uname');
let errorNode5=document.getElementById('error5');
function validate5(){
    errorNode5.textContent="";
    let username=userNode.value;
    userNode.style.border="2px red solid";
    if(username==""){
        errorNode5.textContent="Username is required";
        return false;
    }
    else if(username.length<4 || username.length>10){
        errorNode5.textContent="Username must be 4 to 10 characters long";
        return false;
    }
    else{
        userNode.style.border="2px green solid";
        return true;
    }
}

let ulNode=document.createElement('ul');
let liNode1=document.createElement('li');
liNode1.innerText="Password must not contain symbol";
let liNode2=document.createElement('li');
liNode2.innerText="Password should contain alphabets and/or digits";
let liNode3=document.createElement('li');
liNode3.innerText="password must be 4 to 8 characters long";
ulNode.append(liNode1,liNode2,liNode3);

let passNode=document.getElementById('pass');
let errorNode6=document.getElementById('error6');
function validate6(){
    errorNode6.textContent="";
    let password=passNode.value;
    passNode.style.border="2px red solid";
    let passPattern= new RegExp("^[A-Za-z0-9]{4,8}$");
    if(password==""){
        errorNode6.textContent="Password is required";
        return false;
    }
    else if(passPattern.test(password)==false){
        errorNode6.append(ulNode);
        return false;
    }
    else{
        passNode.style.border="2px green solid";
        return true;
    }

}
let cpassNode=document.getElementById('cpass');
let errorNode7=document.getElementById('error7');
function validate7(){
    errorNode7.textContent="";
    let confirmPassword=cpassNode.value;
    let password=passNode.value;
    cpassNode.style.border="2px red solid";
    if(confirmPassword==""){
        errorNode7.textContent="Confirm Password is required";
        return false;
    }
    else if(confirmPassword!=password){
        errorNode7.textContent="Confirm Password must match with password";
        return false;
    }
    else{
        cpassNode.style.border="2px green solid";
        return true;
    }
}
let nodeArray=[fnameNode,lnameNode,ageNode,mailNode,userNode,passNode,cpassNode];
function validateForm(){
    let flag1=validate1();
    let flag2=validate2();
    let flag3=validate3();
    let flag4=validate4();
    let flag5=validate5();
    let flag6=validate6();
    let flag7=validate7();
    let flagArray=[flag1,flag2,flag3,flag4,flag5,flag6,flag7];
    for(let i=0;i<flagArray.length;i++){
            if(flagArray[i]==false){
                nodeArray[i].focus();
                break;
            }
        }
    return (flag1 && flag2  && flag3 && flag4 && flag5 && flag6 && flag7)
}