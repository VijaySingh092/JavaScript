const input= document.getElementById("input");
const button = document.getElementById("button");
const inputValue= document.getElementById("input-value");
const mirroredValue=document.getElementById("mirror-value")

input.addEventListener("keyup",()=>{
    inputValue.innerText=input.value;
});

button.addEventListener("click",()=>
{
    if(input.value.length>0){
        mirroredValue.innerText=input.value.split("").reverse().join("");
    }else{
        mirroredValue.innerText="";
    }
})