const element = document.querySelector("#number");

document.querySelector("#first").addEventListener("click", function() {
  const val = element.innerText
  element.innerText= element++
});

document.querySelector("#second").addEventListener("click", function() {
  const val = element.innerText
  element.innerText=  element--
});

console.log(element);
