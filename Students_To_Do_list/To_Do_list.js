document.querySelector(".add").addEventListener("click", function(){
  document.querySelector(".popup").classList.add("active");
});

document.querySelector(".but-cancel").addEventListener("click", function(){
  document.querySelector(".popup").classList.remove("active");
});

const ul = document.querySelector(".ul");
const input1 = document.querySelector(".input-1");


document.querySelector(".but-add").addEventListener("click", function(){
    if (input1.value === '') {
      alert("You must write something")
    }
    else {
      let list = document.createElement("li");
      list.innerHTML = input1.value
      ul.appendChild(list) ;
    }
})
