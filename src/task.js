class Task {
  PRIORITY = {
    1: "high",
    2: "medium",
    3: "low"
  }

  constructor(description, priority, dueDate) {
    this.description = description
    this.priority = priority
    this.dueDate = dueDate
  }


  render() { // instance method
    return `
      <li class="${this.PRIORITY[this.priority]}">
        <p>Description: ${this.description}<p>
        <p>Due Date: ${this.dueDate}<p>
        <button data-description="${this.description}" >X</button>
      </li>
      `;
  }
}
