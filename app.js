let btn = document.querySelector("#btn");
let ul = document.querySelector("#list");
let inp = document.querySelector("input");

// activities on buttons ------
btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = inp.value;

  let delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  delBtn.classList.add("delete");

  item.appendChild(delBtn);

  ul.appendChild(item);
  // console.log(inp.value);
  inp.value = "";
});

// targetin parent class element for deleting task --------
ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON"){
       let listItem = event.target.parentElement;
       listItem.remove();
    //    console.log(event.target.nodeName);
       console.log("deleted");
    }
});

// deleteing task using delete button -------
let delBtns = document.querySelectorAll(".delete");
for (delBtn of delBtns) {
  delBtn.addEventListener("click", function () {
    let par = this.parentElement;
    console.log(par);
    par.remove();
  });
}
