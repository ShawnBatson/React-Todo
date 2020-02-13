import React from "react";

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
    this.props.addTask(event, this.state.task);
  };

  render() {
    return (
      <form onSubmit={this.submitTask}>
        <label>
          <input type="text" name="task" onChange={this.handleChanges}>
            <button>Add </button>
          </input>
        </label>
      </form>
    );
  }
}

export default ToDoForm;
