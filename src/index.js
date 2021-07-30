// OO solution

// initialize taskList class
const taskList = new TaskList()
//grab all the necessary DOM elements

//form and relevant input fields
const newTaskForm = document.getElementById("create-task-form")
const newTaskPriority = document.getElementById("new-task-priority")
const sortButton = document.getElementById('sort-tasks')
const navBar = document.getElementById('nav-mobile')
const signupModal = document.getElementById('modal-signup')
const loginModal = document.getElementById('modal-login')
const accountModal = document.getElementById('modal-account')

//ul where new tasks will live on the DOM
const taskUl = document.getElementById("tasks")

const renderApp = () => (taskUl.innerHTML = taskList.renderTasks())
//attach event listeners

newTaskForm.addEventListener("submit", e => {
  e.preventDefault();
   
  taskList.createNewTask(
    newTaskForm['new-task-description'].value,
    newTaskForm['priority'].value,
    newTaskForm['due-date'].value
  );

  // reset form
  e.target.reset();
  renderApp();
});

taskUl.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON") {
    task = JSON.parse(e.target.dataset.task)
    console.log(e.target.parentNode)
    taskList.deleteTask(e.target.dataset.description)
    renderApp();
  }
});

sortButton.addEventListener('change', e => {
  console.log("SORTING THE TASKS")
  taskList.sortTasks(e.target.value)
  renderApp();
})

navBar.addEventListener("click", e => {
  e.preventDefault()

  switch (e.target.dataset.target) {
    case "modal-account":
      accountModal.classList.add("show")
      break;
    case "modal-login":
      loginModal.classList.add("show")
      break;
    case "modal-signup":
      signupModal.classList.add("show")
  }
})