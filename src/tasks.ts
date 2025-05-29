const taskForm = document.querySelector<HTMLFormElement>(".form");
const formInput = document.querySelector<HTMLInputElement>(".form-input");
const taskListElement = document.querySelector<HTMLUListElement>(".list");

type Task = {
  description: string;
  isCompleted: boolean;
};

const tasks: Task[] = getValueFromLocalStorage();

tasks.map(renderTasks);

taskForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskDescription = formInput?.value;

  if (!taskDescription) {
    alert("Provide the value");
    return;
  }

  const newTask: Task = {
    description: taskDescription,
    isCompleted: false,
  };

  addTask(newTask);
  renderTasks(newTask);
  saveToLocalStorage();

  formInput.value = "";
  return;
});

function addTask(task: Task): void {
  tasks.push(task);
}

function renderTasks(task: Task): void {
  const taskElement = document.createElement("li");
  taskElement.textContent = task.description;

  const taskCheckBox = document.createElement("input");
  taskCheckBox.type = "checkbox";
  taskCheckBox.checked = task.isCompleted;

  taskCheckBox.addEventListener("change", () => {
    task.isCompleted = !task.isCompleted;
    saveToLocalStorage();
  });

  taskElement.appendChild(taskCheckBox);
  taskListElement?.appendChild(taskElement);
}

function saveToLocalStorage(): void {
  localStorage.setItem("tasksTS", JSON.stringify(tasks));
}

function getValueFromLocalStorage(): Task[] {
  const tasks = localStorage.getItem("tasksTS");

  if (tasks) {
    return JSON.parse(tasks);
  }

  return [];
}
