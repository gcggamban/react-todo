import React, { useState } from "react";

import TodoList from "../TodoList";
import TodoItemInput from "../TodoItemInput";
import "./todoContainer.css";

class TodoContainer extends React.Component {
  state = {
    header: "",
  };

  componentDidMount() {
    this.setState({
      header: "Welcome to our React Brownbag Session",
    });
  }

  render() {
    return (
      <div id="todo-container">
        <h1>{this.state.header}</h1>
      </div>
    );
  }
}

export default TodoContainer;
