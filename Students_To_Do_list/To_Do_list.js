document.querySelector(".add").addEventListener("click", function(){
  document.querySelector(".popup").classList.add("active");
});

document.querySelector(".but-cancel").addEventListener("click", function(){
  document.querySelector(".popup").classList.remove("active");
});

