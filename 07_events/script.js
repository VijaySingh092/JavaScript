let btn1= document.querySelector("#btn1");
 
btn1.onclick=()=>{
    console.log("btn1 was clicked ");
};

let btn2= document.querySelector("#btn2");

btn2.ondblclick=()=>{
    console.log("btn2 was clicked twice")
};

let div = document.querySelector("div");

div.onmouseover=(e)=>{
    console.log(e);
    console.log(e.type);
    console.log("you are inside div");

};
