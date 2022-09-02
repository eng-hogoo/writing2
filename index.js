
// // // //from 86/93 ==>six
let firstInp=document.getElementsByClassName("input")[0]
let secondInp=document.getElementsByClassName("input")[1]
let creatInp=document.querySelectorAll("[name=create")[0]
let result=document.querySelector("div")
let select=document.querySelector("[name=type] ")
let section=select[1]
let form=document.forms[0]
firstInp.setAttribute("min","0");

form.onsubmit=function(e){

 e.preventDefault();

 document.querySelectorAll(".box").forEach(element => element.remove());
 document.querySelectorAll(".Sec").forEach(element => element.remove());

for(i=1;i<=firstInp.value;i++){
    let a=document.createElement("div")
if(select.value===section.value){
    a.className="Sec"
}else{a.className="box"
}
a.title="element"
a.setAttribute("id",`id${i}`)

result.appendChild(a)[i]

let text=document.createTextNode(secondInp.value)
a.appendChild(text)
}

}







