import React from "react";
import ToDoList from "./components/TodoComponents/TodoList";
import ToDoForm from "./components/TodoComponents/TodoForm";
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
    this.state = { ToDoItems };
  }

  addTodo = (event, task) => {
    event.preventDefault();

    const newToDo = {
      name: task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      ToDoItems: [...this.state.ToDoItems, newToDo]
    });
  };

  toggleTask = toDoId => {
    console.log(toDoId);

    this.setState({
      ToDoItem: this.state.ToDoItems.map(task => {
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

  clearTask = event => {
    event.preventDefault();
    this.setState({
      ToDoItems: this.state.ToDoItems.filter(task => task.completed === false)
    });
  };

  render() {
    return (
      <div className="App">
        <div className="Header">
          <h2>Welcome to your Todo App!</h2>
        </div>
        <div className="formInputs">
          <ToDoForm addTodo={this.addTodo} />
        </div>
        <div>
          <ToDoList
            ToDoItems={this.state.ToDoItems}
            toggleTask={this.toggleTask}
            clearTask={this.clearTask}
          />
        </div>
      </div>
    );
  }
}

export default App;
