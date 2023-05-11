let fnameNode=$('#firstName');
let errorNode1=$('#error1');
let lnameNode=$('#lastName');
let errorNode2=$('#error2');
let ageNode=$('#age');
let errorNode3=$('#error3');
let mailNode=$('#mailId');
let errorNode4=$('#error4');
let userNode=$('#uname');
let errorNode5=$('#error5');
let passNode=$('#pass');
let errorNode6=$('#error6');
let cpassNode=$('#cpass');
let errorNode7=$('#error7');
$(function(){
    fnameNode.blur(()=>validate1());
    lnameNode.blur(()=>validate2());
    ageNode.blur(()=>validate3());
    mailNode.blur(()=>validate4());
    userNode.blur(()=>validate5());
    passNode.blur(()=>validate6());
    cpassNode.blur(()=>validate7());

    $('#regForm').submit(()=>validateForm());
});
function validate1(){
    errorNode1.text("");
    let fname=fnameNode.val();
    let fnamePattern= new RegExp("^[A-Za-z]*$");
    fnameNode.css({border:"2px red solid"});
    if(fname==""){
        errorNode1.text("First name is required");
        return false;
    }
    else if(fname.length<2){
        errorNode1.text("name must contain atleast 2 characters");
        return false;
    }
    else if(fnamePattern.test(fname)==false){
        errorNode1.text("name must have only alphabets");
        return false;
    }
    else{
        fnameNode.css({border:"2px green solid"});
        return true;
    }
}

function validate2(){
    errorNode2.text("");
    let lname=lnameNode.val();
    lnameNode.css({border:"2px red solid"});
    if(lname==""){
        errorNode2.text("Last name is required");
        return false;
    }
    else{
        lnameNode.css({border:"2px green solid"});
        return true;
    }
}


function validate3(){
    errorNode3.text("");
    let age=ageNode.val();
    ageNode.css({border:"2px red solid"});
    if(age==""){
        errorNode3.text("Age is required");
        return false;
    }
    else if(age<20 || age>40){
        errorNode3.text("Age must be between 20 to 40");
        return false;
    }
    else{
        ageNode.css({border:"2px green solid"});
        return true;
    }
}

function validate4(){
    errorNode4.text("");
    let email=mailNode.val();
    mailNode.css({border:"2px red solid"});
    if(email==""){
        errorNode4.text("Email Id is required");
        return false;
    }
    else if(!email.includes('@')){
        errorNode4.text("Please enter valid EmailId");
        return false;
    }
    else if(email.endsWith('@')){
        errorNode4.text("Please enter valid EmailId");
        return false;
    }
    else{
        mailNode.css({border:"2px green solid"});
        return true;
    }
}


function validate5(){
    errorNode5.text("");
    let username=userNode.val();
    userNode.css({border:"2px red solid"});
    if(username==""){
        errorNode5.text("Username is required");
        return false;
    }
    else if(username.length<4 || username.length>10){
        errorNode5.text("Username must be 4 to 10 characters long");
        return false;
    }
    else{
        userNode.css({border:"2px green solid"});
        return true;
    }
}

let ulNode=$('<ul>');
let liNode1=$('<li>');
liNode1.text("Password must not contain symbol");
let liNode2=$('<li>');
liNode2.text("Password should contain alphabets and/or digits");
let liNode3=$('<li>');
liNode3.text("password must be 4 to 8 characters long");
ulNode.append(liNode1,liNode2,liNode3);
function validate6(){
    errorNode6.text("");
    let password=passNode.val();
    passNode.css({border:"2px red solid"});
    let passPattern= new RegExp("^[A-Za-z0-9]{4,8}$");
    if(password==""){
        errorNode6.text("Password is required");
        return false;
    }
    else if(passPattern.test(password)==false){
        errorNode6.append(ulNode);
        return false;
    }
    else{
        passNode.css({border:"2px green solid"});
        return true;
    }

}

function validate7(){
    errorNode7.text("");
    let confirmPassword=cpassNode.val();
    let password=passNode.val();
    cpassNode.css({border:"2px red solid"});
    if(confirmPassword==""){
        errorNode7.text("Confirm Password is required");
        return false;
    }
    else if(confirmPassword!=password){
        errorNode7.text("Confirm Password must match with password");
        return false;
    }
    else{
        cpassNode.css({border:"2px green solid"});
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