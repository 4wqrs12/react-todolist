import { useState } from "react";
import GroupComponent from "./GroupComponents/GroupComponent";

function CreateGroup() {
  const [groupList, setGroupList] = useState([]);

  function handleClick() {
    let groupName = prompt("Enter the name of the group: ");
    groupName
      ? setGroupList([...groupList, groupName])
      : alert("Group name not given.");
  }

  return (
    <div className="container">
      <button className="btn create-group" onClick={handleClick}>
        +
      </button>

      {groupList.map((name, index) => (
        <GroupComponent name={name} key={index} />
      ))}
    </div>
  );
}

export default CreateGroup;
