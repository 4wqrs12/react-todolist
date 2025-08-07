import { useState } from "react";

function TodoList() {
  const [name, setName] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleTaskCreation() {
    setTasks([...tasks, name]);
    setName("");
  }

  function handleTaskRename(e) {
    const newName = prompt("Enter the new name: ");
    if (newName) {
      tasks[tasks.indexOf(e.target.textContent)] = newName;
      e.target.textContent = newName;
    }
  }
  function handleTaskDeletion(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }
  function handleMoveUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  function handleMoveDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        name="task-name"
        value={name}
        onChange={handleNameChange}
      />
      <button onClick={handleTaskCreation}>+</button>

      {tasks.map((task, index) => (
        <div key={index}>
          <button value={task} onClick={handleTaskRename}>
            {task}
          </button>
          <button onClick={() => handleTaskDeletion(index)}>X</button>
          <button onClick={() => handleMoveUp(index)}>UP</button>
          <button onClick={() => handleMoveDown(index)}>DOWN</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
