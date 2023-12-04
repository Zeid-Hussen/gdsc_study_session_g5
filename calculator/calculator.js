
const display = document.querySelector(".display");
let done = false;


document.getElementById("nine").addEventListener("click", function() {
  done = false;
    display.innerText += document.getElementById("nine").innerText; 
});

document.querySelectorAll(".numbers").forEach((elem) => {
  elem.addEventListener("click", () => {
    if (done) { 
      display.innerHTML = "";
    }
  });
})



document.getElementById("eight").addEventListener("click", function() {
  done = false;
    display.innerText += document.getElementById("eight").innerText;
});

document.getElementById("Lleft").addEventListener("click", function() {
    display.innerText += document.getElementById("Lleft").innerText;
});

document.getElementById("Rright").addEventListener("click", function() {
  display.innerText += document.getElementById("Rright").innerText;
});

document.getElementById("left").addEventListener("click", function() {
  display.innerText += document.getElementById("left").innerText;
});

document.getElementById("right").addEventListener("click", function() {
  display.innerText += document.getElementById("right").innerText;
});

document.getElementById("seven").addEventListener("click", function() {
  done = false;
  display.innerText += document.getElementById("seven").innerText;
});

document.getElementById("six").addEventListener("click", function() {
  done = false;
  display.innerText += document.getElementById("six").innerText;
});

document.getElementById("five").addEventListener("click", function() {
  done = false;
  display.innerText += document.getElementById("five").innerText;
});

document.getElementById("zero").addEventListener("click", function() {
  done = false;
  display.innerText += document.getElementById("zero").innerText;
});

document.querySelector(".delete").addEventListener("click", function() {
  display.innerText = display.innerText.slice(0, display.innerText.length-1); 
});

document.getElementById("four").addEventListener("click", function() {
  done = false;
  display.innerText += document.getElementById("four").innerText;
});

document.getElementById("three").addEventListener("click", function() {
  done = false;
  display.innerText += document.getElementById("three").innerText;
});

document.getElementById("two").addEventListener("click", function() {
  done = false;
  display.innerText += document.getElementById("two").innerText;
});

document.getElementById("one").addEventListener("click", function() {
  done = false;
  display.innerText += document.getElementById("one").innerText;
});

document.getElementById("minus").addEventListener("click", function() {
  display.innerText += document.getElementById("minus").innerText;
});

document.getElementById("plus").addEventListener("click", function() {
  display.innerText += document.getElementById("plus").innerText;
});

document.getElementById("over").addEventListener("click", function() {
  display.innerText += document.getElementById("over").innerText;
});

document.getElementById("dot").addEventListener("click", function() {
  display.innerText += document.getElementById("dot").innerText;
});

document.getElementById("times").addEventListener("click", function() {
  display.innerText += document.getElementById("times").innerText;
});

document.getElementById("equals").addEventListener("click", function() {
      const result = eval( display.innerText);
      display.innerText = result;
      done = true;
});