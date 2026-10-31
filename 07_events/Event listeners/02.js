const x = document.getElementById("clickit"); // for button

const y = document.getElementById("hoverit");// for paragrapg

x.addEventListener("click",RespondClick);// adding a eventlistener to x , when we click the respondClick() is called


//addEventListener() expects a function reference, not the result of a function being called immediately.  
// that is why we don't write x.addEventListener("click", RespondClick()); ,  the parentheses () are invoking the function immediately when the event listener is set up. This means that when the page loads, the RespondClick() function runs right away, and whatever result it returns is passed to addEventListener (likely undefined, since the function doesn't return anything by default). This is not what you want!

y.addEventListener("mouseover",RespondMouseOver);// adding eventlistener

y.addEventListener("mouseout",RespondMouseOut);// adding event listener


// defining the functions

function RespondMouseOver(){
    document.getElementById("effect").innerHTML+="Mouseover Event"+"<br>";
}

function RespondMouseOut(){
document.getElementById("effect").innerHTML+="MouseOut Event"+"<br>";
}

function RespondClick(){
    document.getElementById("effect").innerHTML+="click Event"+"<br>";
}