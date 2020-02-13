import React from "react";
import ToDo from "./Todo";

const ToDoList = props => {
  return (
    <div className="toDo-list">
      {props.ToDoItems.map(task => (
        <ToDo id={task.id} task={task} toggleTask={props.toggleTask} />
      ))}
      <button className="clear" onClick={props.clearTask}>
        Clear Task
      </button>
    </div>
  );
};

export default ToDoList;
