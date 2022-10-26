// fill in javascript code here
document.querySelector("form").addEventListener("submit",myFun);
function myFun(){
    event.preventDefault();
    var name=document.querySelector("#name").value;
    var emp=document.querySelector("#employeeID").value;
    var dept=document.querySelector("#department").value;
    var exp=+document.querySelector("#exp").value;
    var mail=document.querySelector("#email").value;
    var mobile=document.querySelector("#mbl").value;
    var trow=document.createElement("tr");
    var td1=document.createElement("td");
    var td2=document.createElement("td");
    var td3=document.createElement("td");
    var td4=document.createElement("td");
    var td5=document.createElement("td");
    var td6=document.createElement("td");
    var td7=document.createElement("td");
    var td8=document.createElement("td");
    trow.append(td1,td2,td3,td4,td5,td6,td7,td8);
    document.querySelector("tbody").append(trow);
    td1.innerText=name;
    td2.innerText=emp;
    td3.innerText=dept;
    td4.innerText=exp;
    td5.innerText=mail;
     td6.innerText=mobile;
    if(exp>5){
        td7.innerText="Senior";
    }
    else if(exp>=2){
        td7.innerText="Junior";
    }
    else{
        td7.innerText="Fresher";
    }
     td8.innerText="delete";
     td8.style.backgroundColor="red";
     td8.addEventListener("click",mydel);
     document.querySelector("#name").value="";
     document.querySelector("#employeeID").value="";
     document.querySelector("#department").value="";
     document.querySelector("#exp").value="";
     document.querySelector("#email").value="";
     document.querySelector("#mbl").value="";
    



}
function mydel(event){
    event.target.parentNode.remove();
}
