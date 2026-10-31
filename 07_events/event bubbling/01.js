document.getElementById("child").addEventListener("click",function(){
    alert("you clicked the child element!!");
},false);   // false is the use capture

document.getElementById("parent").addEventListener("click",function(){
    alert("you clicked the parent element!!");
},false);


// when the use capture is false
// clicking the child element will trigger:
//"You clicked the Child element!"
//"You clicked the parent element!"

// when the use capture is true
//Clicking the child element will show the alerts in this order:
//"You clicked the parent element!"
//"You clicked the Child element!"