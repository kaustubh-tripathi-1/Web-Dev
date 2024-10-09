//@ Question 1

const para = document.querySelector("#description");

para.innerHTML = "Hello, World!";

//@ Question 2

const item = document.querySelectorAll(".item");

for (let i = 0; i < item.length; i++) {
  item[i].style.backgroundColor = "#606060";
  item[i].style.padding = "20px";
}

//@ Question 3

let outerDiv = document.querySelector(".text");

let ul1 = document.createElement("ul");
ul1.setAttribute("id", "myList");
ul1.style.backgroundColor = "red";

outerDiv.prepend(ul1);

let li1 = document.createElement("li");

li1.innerText = "New Item";

ul1.prepend(li1);

//@ Question 4

let allDiv = document.querySelectorAll("div");

allDiv.forEach((node) => {
  node.classList.add("menu-item");
});

let menu = document.querySelectorAll(".menu-item");

for (let i = 0; i < menu.length; i++) {
  menu[i].style.fontSize = "2rem";
}

//@ Question 5

para.setAttribute("id", "deleteMe");

let deleteButton = document.createElement("button");
deleteButton.setAttribute("id", "removeBtn");

const text = document.createTextNode("Click me to delete the paragragh");
deleteButton.appendChild(text);

const secondChild = outerDiv.children[2];

outerDiv.insertBefore(deleteButton, secondChild);

function deleteElement() {
  let paraToDelete = document.querySelector("#deleteMe");
  if (paraToDelete) {
    paraToDelete.remove();
  }
}

deleteButton.addEventListener("dblclick", deleteElement);
