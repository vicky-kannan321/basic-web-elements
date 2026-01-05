function formvalid()
{
const fname=document.getElementById("fname").value
const lname=document.getElementById("lname").value
const email=document.getElementById("email").value
const query=document.getElementById("query").checked
const message=document.getElementById("message").value
const check=document.getElementById("check").checked


let fnameerror=document.getElementById("fname-error")
let lnameerror=document.getElementById("lname-error")
let emailerror=document.getElementById("email-error")
let queryerror=document.getElementById("query-error")
let messageerror=document.getElementById("message-error")
let checkerror=document.getElementById("check-error")
fnameerror.innerHTML=""
lnameerror.innerHTML=""
emailerror.innerHTML=""
queryerror.innerHTML=""
messageerror.innerHTML=""
checkerror.innerHTML=""

let valid=true

if(fname===""){
fnameerror.innerHTML="This field is required"
valid=false
}
if(lname===""){
lnameerror.innerHTML="This field is required"
valid=false
}
if(email===""||!email.includes("@")){
emailerror.innerHTML="please enter a valid email address"
valid=false
}
if(!query){
queryerror.innerHTML="please select a query type"
valid=false
}
if(message===""){
messageerror.innerHTML="This field is required"
valid=false
}
if(!check){
checkerror.innerHTML="To submit this form,please a consent being to contacted"
valid=false
}
// alert("Thanks for completing the form,we will be in touch soon!!")

return valid


}