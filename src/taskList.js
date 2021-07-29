class TaskList {
  constructor() {
    this.tasks = []; 
  }

  createNewTask(description, priority, dueDate) {
    const newTask = new Task(description, priority, dueDate);
    this.tasks.push(newTask);
  }

  renderTasks() {
    return this.tasks.map((task) => task.render()).join("");
  }

  deleteTask(description) {
    this.tasks = this.tasks.filter((task) => task.description !== description);
  }

  sortTasks(sort) {
    switch (sort) {
      case 'ASC':
        this.tasks.sort((task1, task2) => task1.priority - task2.priority)
        break;
      case 'DESC':
        this.tasks.sort((task1, task2) => task2.priority - task1.priority)
        break;
      default:
    }
    
  }
}

