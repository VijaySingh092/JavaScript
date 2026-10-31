const parentdiv= document.getElementById("parent");
parentdiv.addEventListener("click",function(event){
    if(event.target.tagName ==='BUTTON'

    ){
        console.log(`you clicked on ${event.target.textContent}`

        )};
}
);