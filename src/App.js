import React from "react";
import styled from "styled-components";
import ToDo from "./components/TodoComponents/Todo";

const ToDoItems = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = { ToDo };
  }

  addTodo = (event, task) => {
    event.preventDefault();

    const newToDo = {
      task: task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      ToDoItems: [...ToDoItems, newToDo]
    });
  };

  toggleItem = toDoId => {
    console.log(toDoId);

    this.setState({
      ToDoItems: this.state.ToDoItems.map(task => {
        if (toDoId === task.id) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      })
    });
  };

  render() {
    return (
      <div className="App">
        <div className="Header">
          <h2>Welcome to your Todo App!</h2>
        </div>
        <div className="formInputs"></div>
      </div>
    );
  }
}

export default App;
