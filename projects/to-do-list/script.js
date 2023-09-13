document.querySelector("#push").onclick = function () {
  //Adding validation for empty input field
  if (document.querySelector(".newtask input").value.length == 0) {
    alert("Nothing to save, please enter a new task ");
  } else { 
    //Adding a new task
    document.querySelector("#tasks").innerHTML += `
        <div class="task">
            <span>
                ${document.querySelector(".newtask input").value}
            </span>
            <button class="delete">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
        `;
    //Deleting a task
    let current_tasks = document.querySelectorAll(".delete");
    for (let i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
    //Crossing off a completed task
    let tasks = document.querySelectorAll(".task");
    for (let i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
        this.classList.toggle("completed");
      };
    }
    //Clearing the input field after each entry
    document.querySelector(".newtask input").value = "";
  }
};
