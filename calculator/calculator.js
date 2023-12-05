
const display = document.querySelector(".display");
let done = false;



document.querySelectorAll(".numbers").forEach((elem) => {
  elem.addEventListener("click", () => {
    if (done) {
      display.textContent = "";
      done = false;
    }

    if ((display.textContent.length) % 36 === 0) {
      display.textContent += "\n";
    }

    display.textContent += elem.textContent;
  });
});




document.querySelectorAll(".oprators").forEach((elem) => {
  elem.addEventListener("click", () => {
    

    if ((display.textContent.length) % 36 === 0) {
      display.textContent += "\n";
    }

    display.textContent += elem.textContent;
  });
});


document.querySelector(".delete").addEventListener("click", function() {
    display.innerText = display.innerText.slice(0, display.innerText.length-1); 
  });



document.getElementById("equals").addEventListener("click", function() {
      const result = eval( display.textContent);
      display.textContent = result;
      done = true;
});
