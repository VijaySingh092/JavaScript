//In this exercise you have to highlight word that have more than 5 characters with green background

let para = document.getElementById("para");
        para.innerHTML = para.innerText
          .split(" ")
          .map((word) =>
            word.length > 5
              ? `<span style="background-color:green; color:white">${word}</span>`
              : word
          )
          .join(" ");
