import { useState } from "react";

function Task(props) {
  const [displayType, setDisplayType] = useState("block");

  function changeName(event) {
    let newName = prompt("Enter the new name: ");
    //event.target.textContent = newName;
    newName ? (event.target.textContent = newName) : alert("No name given.");
  }

  function handleDisplay() {
    setDisplayType("none");
  }

  return (
    <div className="task" style={{ display: displayType }}>
      <button className="btn" onClick={(event) => changeName(event)}>
        {props.name}
      </button>
      <button className="btn" onClick={handleDisplay}>
        X
      </button>
    </div>
  );
}

export default Task;
