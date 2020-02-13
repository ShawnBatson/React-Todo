import React from "react";

const ToDo = props => {
  console.log(props);

  return (
    <div onClick={() => props.toggleTask(props.task.id)}>
      <p>{props.task.name}</p>
    </div>
  );
};

export default ToDo;
