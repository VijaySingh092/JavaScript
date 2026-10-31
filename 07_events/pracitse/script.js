// create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again

let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");

let currmode ="light";

modebtn.addEventListener("click",() => {
    if(currmode === "light"){
        currmode ="dark";
        body.style.backgroundColor="black";
    }else{
        currmode="light";
         body.style.backgroundColor="white";
    }
    console.log(currmode);
});