let fnameNode=document.getElementById('firstName');
let errorNode1=document.getElementById('error1');
function validate1(){
    errorNode1.textContent="";
    let fname=fnameNode.value;
    let fnamePattern= new RegExp("^[A-Za-z]*$");
    fnameNode.style.border="2px red solid";
    if(fname==""){
        errorNode1.textContent="First name is required";
    }
    else if(fname.length<2){
        errorNode1.textContent="name must contain atleast 2 characters";
    }
    else if(fnamePattern.test(fname)==false){
        errorNode1.textContent="name must have only alphabets";
    }
    else{
        fnameNode.style.border="2px green solid";
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
    }
    else{
        lnameNode.style.border="2px green solid";
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
    }
    else if(age<20 || age>40){
        errorNode3.textContent="Age must be between 20 to 40";
    }
    else{
        ageNode.style.border="2px green solid";
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
    }
    else if(!email.includes('@')){
        errorNode4.textContent="Please enter valid EmailId";
    }
    else if(email.endsWith('@')){
        errorNode4.textContent="Please enter valid EmailId";
    }
    else{
        mailNode.style.border="2px green solid";
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
    }
    else if(username.length<4 || username.length>10){
        errorNode5.textContent="Username must be 4 to 10 characters long";
    }
    else{
        userNode.style.border="2px green solid";
    }
}
let passNode=document.getElementById('pass');
let errorNode6=document.getElementById('error6');
function validate6(){
    errorNode6.textContent="";
    let password=passNode.value;
    passNode.style.border="2px red solid";
    let passPattern= new RegExp("^[A-Za-z0-9]{4,8}$");
    if(password==""){
        errorNode6.textContent="Password is required";
    }
    else if(passPattern.test(password)==false){
        errorNode6.textContent="Password must not contain symbol. should contain alphabets and/or digits. password must be 4 to 8 characters long";
    }
    else{
        passNode.style.border="2px green solid";
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
    }
    else if(confirmPassword!=password){
        errorNode7.textContent="Confirm Password must match with password";
    }
    else{
        cpassNode.style.border="2px green solid";
    }
}