import { useState } from "react";
import Task from "./Task";

function TopBar() {
  const [name, setName] = useState("");
  const [taskList, setTaskList] = useState([]);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function appendToTaskList(item) {
    name ? setTaskList([...taskList, item]) : alert("Name not given.");
  }

  return (
    <div className="top-bar">
      <input
        type="text"
        placeholder="Name"
        onChange={(event) => handleNameChange(event)}
      />

      <button className="btn" onClick={() => appendToTaskList(name)}>
        +
      </button>
      {taskList.map((name, index) => (
        <Task name={name} key={index} />
      ))}
    </div>
  );
}

export default TopBar;
