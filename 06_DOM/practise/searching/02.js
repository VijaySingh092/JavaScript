function myFunction() {
    var x = document.getElementById("geeks").querySelectorAll("p");

    
    //document.getElementById("geek") - This targets the element with the ID "geek".
    // document.getElementById is used to get the element after that we use .querySelectorAll()  
    // querySelectorAll("p") - This selects all <p> tags inside the element with the ID "geek"
    //  syntax     element.querySelectorAll(selectors)

    var i;
    for (i = 0; i < x.length; i++) {   // this loop iterates over all the <p> elements
    x[i].style.backgroundColor = "green"; // sets the background color green
    x[i].style.color = "white";  // sets the text color to white
    }
}