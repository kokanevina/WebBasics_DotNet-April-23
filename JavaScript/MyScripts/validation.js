let fnameNode=document.getElementById('firstName');
let errorNode1=document.getElementById('error1');
function validate1(){
    let fname=fnameNode.value;
    if(fname==""){
        errorNode1.textContent="First name is required";
    }
}