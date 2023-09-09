const inputTask = document.querySelector("#input-task");

const taskList = document.querySelector("#task-list");

function addTask() {
  if (inputTask.value == "") {
    Notiflix.Notify.Failure("Enter the task before adding");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputTask.value;
    taskList.appendChild(li);
    let img = document.createElement("img");
    img.src = "./img/delete.png";
    li.appendChild(img);
  }
  inputTask.value = "";
  saveData();
}

taskList.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "IMG") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", taskList.innerHTML);
}

function showTask() {
  taskList.innerHTML = localStorage.getItem("data");
}
showTask();
