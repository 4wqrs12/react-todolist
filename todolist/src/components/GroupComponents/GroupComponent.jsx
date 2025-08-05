import TopBar from "./TodoList/TopBar";
import { useState } from "react";

function GroupComponent(props) {
  const [name, setName] = useState(props.name);

  function handleClick() {
    let newName = prompt("Enter the new name: ");
    newName ? setName(newName) : alert("No name given.");
  }

  return (
    <div className="group">
      <h2 className="group-title">{name}</h2>
      <hr />
      <TopBar />
      <hr />
      <button className="btn" onClick={handleClick}>
        Rename
      </button>
    </div>
  );
}

export default GroupComponent;
