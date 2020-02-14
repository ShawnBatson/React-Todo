import React from "react";
import ToDoList from "./components/TodoComponents/TodoList";
import ToDoForm from "./components/TodoComponents/TodoForm";
import styled from "styled-components";
import ToDo from "./components/TodoComponents/Todo";

const MainDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  background: ;
  border: 1px solid black;
`;

const Header = styled.header`
  display: flex;
  width: 25%;
  justify-content: center;
  margin: 1%;
`;

const ToDoAll = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  border: 1px solid blue;
  justify-content: center;
  align-items: center;
  margin: 1%;
  padding: 2%;
`;

////////////////////////////////////
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
    // console.log(toDoId);

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

  clearTask = event => {
    event.preventDefault();

    this.setState({
      ToDoItems: this.state.ToDoItems.filter(task => task.completed === false) //this is to be looked at later..it should be === false but I changed it to true to get the functionality right. Second Note:  I just realized this was meant to toggle it to true, so there is no need to fix
    });
    console.log(this.state.ToDoItems);
  };

  render() {
    return (
      <MainDiv className="App">
        <Header className="Header">
          <h2>Welcome to your Todo App!</h2>
        </Header>
        <div className="formInputs">
          <ToDoForm addTodo={this.addTodo} />
        </div>
        <ToDoAll>
          <ToDoList
            clearTask={this.clearTask}
            ToDoItems={this.state.ToDoItems}
            toggleTask={this.toggleTask}
          />
        </ToDoAll>
      </MainDiv>
    );
  }
}

export default App;
