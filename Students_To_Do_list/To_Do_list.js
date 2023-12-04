const ul = document.querySelector(".ul");
const input1 = document.querySelector(".input-1");
const input2 = document.querySelector(".input-2")

document.querySelector(".add").addEventListener("click", function(){
  document.querySelector(".popup").classList.add("active");
});

document.querySelector(".add-img").addEventListener("click", function(){
  document.querySelector(".popup").classList.add("active");
});

document.querySelector(".but-cancel").addEventListener("click", function(){             document.querySelector(".popup")
  document.querySelector(".popup").classList.remove("active");
  input1.value="";
  input2.value= "";
});



document.querySelector(".but-add").addEventListener("click", function(){
    if (input1.value === '' || input2.value === '') {
      alert("You must write something")
    }
    else {
      let list = document.createElement("li");
    
      let closeIcon = document.createElement("span")
      closeIcon.innerHTML = "\u2715";
      closeIcon.classList.add("closeIcon");
      let outerDiv = document.createElement("div");
      outerDiv.classList.add("outerDiv");
      let firstInput = document.createElement("div");
      firstInput.textContent = input1.value;
      firstInput.classList.add("firstInput");
      let secondInput = document.createElement("div");
      secondInput.textContent = input2.value;
      secondInput.classList.add("secondInput");
      outerDiv.appendChild(firstInput);
      outerDiv.appendChild(secondInput);
      list.appendChild(outerDiv);
      list.appendChild(closeIcon);
      ul.appendChild(list) ;

    }
  input1.value = "";
  input2.value = "";
  document.querySelector(".popup").classList.remove("active")
});

ul.addEventListener("click", (e) => {
  console.log(e)
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("li")
  }
    else if(e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
});

