const display = document.querySelector(".display");


document.getElementById("nine").addEventListener("click", function() {
    const val = display.innerText;
    display.innerText += document.getElementById("nine").innerText; 
});


document.getElementById("eight").addEventListener("click", function() {
    display.innerText += document.getElementById("eight").innerText;
});

document.getElementById("seven").addEventListener("click", function() {
  display.innerText += document.getElementById("seven").innerText;
});

document.getElementById("six").addEventListener("click", function() {
  display.innerText += document.getElementById("six").innerText;
});

document.getElementById("five").addEventListener("click", function() {
  display.innerText += document.getElementById("five").innerText;
});

document.getElementById("zero").addEventListener("click", function() {
  display.innerText += document.getElementById("zero").innerText;
});

document.querySelector(".ac").addEventListener("click", function() {
  display.innerText = ""; 
});

document.getElementById("four").addEventListener("click", function() {
  display.innerText += document.getElementById("four").innerText;
});

document.getElementById("three").addEventListener("click", function() {
  display.innerText += document.getElementById("three").innerText;
});

document.getElementById("two").addEventListener("click", function() {
  display.innerText += document.getElementById("two").innerText;
});

document.getElementById("one").addEventListener("click", function() {
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
   
      const result = eval ( display.innerText);
      display.innerText = result;
});

console.log(display);
