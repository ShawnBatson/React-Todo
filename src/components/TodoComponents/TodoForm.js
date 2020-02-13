import React from "react";
import App from "../../App";

class ToDoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: ""
    };
  }

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitTask = event => {
    event.preventDefault();
    this.props.addTodo(event, this.state.task);
  };

  render() {
    return (
      <form onSubmit={this.state.submitTask}>
        <label>
          <input type="text" name="task" onChange={this.handleChanges}></input>
          <button>Add </button>
        </label>
      </form>
    );
  }
}

export default ToDoForm;
