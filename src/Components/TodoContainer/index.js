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

  // addTodoItem = (todoItem) => {
  //   const { todoList } = this.state;
  //   const currentId = todoList[todoList.length - 1]?.id;
  //   const todoId = (currentId ?? 0) + 1;
  //   this.setState({
  //     todoList: [
  //       ...todoList,
  //       { id: todoId, todoItem: todoItem, status: "todo" },
  //     ],
  //   });
  // };

  // updateTodoItem = (todoId, status) => {
  //   this.setState({
  //     todoList: this.state.todoList.map((todo) =>
  //       todo.id === todoId ? { ...todo, status: status } : todo
  //     ),
  //   });
  // };

  // completeTodoItem = (todoId) => {
  //   this.updateTodoItem(todoId, "completed");
  // };

  // cancelTodoItem = (todoId) => {
  //   this.updateTodoItem(todoId, "canceled");
  // };


  render() {
    return (
      <div id="todo-container">
        <h1>{this.state.header}</h1>
      </div>
    );
  }
}

export default TodoContainer;
