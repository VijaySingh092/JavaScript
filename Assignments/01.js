let products = [
    {
      id: "1",
      item: "Shirt"
    },
    {
      id: "2",
      item: "Jeans"
    },
    {
      id: "3",
      item: "T-shirt"
    },
    {
      id: "4",
      item: "Denim Jacket"
    },
    {
      id: "5",
      item: "Casual Shoes"
    }
  ];
  
  let appContainer = document.getElementById("app");  //the line of code is assigning the HTML element with the ID app to the variable appContainer.
  
  function showProducts(products) {
    for (let product of products) {
      let container = document.createElement("div");  
      //  let is used to declare a variable called container. This means container can be reassigned later and is block-scoped.
      // document.createElement("div") creates a new HTML element, specifically a <div>, but it doesn't add it to the document yet. 
      // The createElement method is used to dynamically create elements in the DOM.

      //This code is creating an HTML <span> element dynamically and setting its text content.
      let label = document.createElement("span");
      label.innerText = product.item;
      //product.item presumably refers to a property (called item) of an object (product). The value of product.item is assigned as the content inside the <span>.
      //For example, if product.item is "Laptop", the label.innerText will be "Laptop", so the <span> will display the word "Laptop" when added to the HTML document.
  
      let button = document.createElement("button");
      button.setAttribute("data-ID", product.id);

      button.innerText = "Remove";//This sets the text displayed inside the button to "Remove".
  


      // these lines are responsible for appending the dynamically created elements to the DOM so that they are displayed in the HTML page
      container.appendChild(label);
      container.appendChild(button);
      appContainer.appendChild(container);
    }
  }
  
  showProducts(products);
  
  appContainer.addEventListener("click", (event) => {
    let itemId = event.target.dataset.id;
    products = products.filter((product) => product.id !== itemId);
    appContainer.innerHTML = "";
    showProducts(products);
  });
