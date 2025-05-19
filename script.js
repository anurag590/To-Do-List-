let btn = document.querySelector("#submit");
let inp = document.querySelector("#input");
let ul = document.querySelector("#list-container");
let body = document.querySelector("body");

btn.addEventListener("click", () => {
  let newitem = document.createElement("li");
  if (inp.val == "") {
    console.error("Please Enter the Task ");
  }
  if (inp.value != "") {
    newitem.innerText = inp.value;
    ul.appendChild(newitem);
    console.log(" Task  Added successfully ");
  }

  inp.value = "";
  let delbut = document.createElement("button");
  delbut.innerText = "Delete";
  delbut.style.backgroundColor = "violet";
  delbut.style.margin = "10px";
  newitem.appendChild(delbut);

  delbut.addEventListener("click", () => {
    let parent = delbut.parentElement;
    parent.remove();
    console.log("deletion successfull ");

    btn.addEventListener("click", () => {
      let p = document.createElement("p");
      p.innerText = "Don’t watch the clock; do what it does. Keep going.";
      p.style.color = "black";
      body.appendChild(p);
      let btn2 = document.createElement("button");
      btn.innerText = "Delete";
      let parent2 = btn2.parentElement;
      parent2.remove;
    });
  });
});
