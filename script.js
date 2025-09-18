const inputEl = document.getElementById("myInput");
const buttonEl = document.getElementById("button");
const listEl = document.getElementById("todo_list");

buttonEl.addEventListener("click", () => {
  if (inputEl.value === "") {
    alert("Enter task");
  } else {
    const li = document.createElement("li");
    const text = document.createTextNode(inputEl.value);
    li.appendChild(text);
    listEl.appendChild(li);
    inputEl.value = "";
  }
});
