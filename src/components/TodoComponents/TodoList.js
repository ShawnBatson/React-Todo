import React from "react";
import ToDo from "./Todo";
import styled from "styled-components";

const Button = styled.button`
  background-color: white;
  color: red;
  border-radius: 5px;
`;

const ToDoList = props => {
  return (
    <>
      <div className="toDo-list">
        {props.ToDoItems.map(task => (
          <ToDo id={task.id} task={task} toggleTask={props.toggleTask} />
        ))}
        <Button className="clear" onClick={props.clearTask}>
          Clear Completed Tasks
        </Button>
      </div>
    </>
  );
};

export default ToDoList;
