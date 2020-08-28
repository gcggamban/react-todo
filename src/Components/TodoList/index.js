import React from "react";
import PropTypes from "prop-types";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Divider,
} from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import DeleteIcon from "@material-ui/icons/Delete";

const TodoItem = (props) => {
  return (
    <ListItem key={props.todoItem.id}>
      <ListItemText primary={props.todoItem.todoItem} />
      {props.completeFunction && props.removeFunction && (
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="complete"
            onClick={() => {
              props.completeFunction(props.todoItem.id);
            }}
          >
            <CheckCircleIcon />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => {
              props.removeFunction(props.todoItem.id);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      )}
    </ListItem>
  );
};

const todoListStyle = {
  display: "grid",
  gridTemplateColumns: "1fr .1fr 1fr .1fr 1fr",
  textAlign: "center",
  padding: "1em",
};

function TodoList(props) {
  return (
    <div style={todoListStyle}>
      <div>
        <h2>Todo List</h2>
        <List>
          {props.todoItems
            .filter((todo) => {
              return todo.status === "todo";
            })
            .map((todo) => {
              return (
                <TodoItem
                  completeFunction={props.completeTodoFunction}
                  removeFunction={props.cancelTodoFunction}
                  todoItem={todo}
                />
              );
            })}
        </List>
      </div>
      <Divider orientation="vertical" flexItem />
      <div>
        <h2>Canceled</h2>
        <List>
          {props.todoItems
            .filter((todo) => {
              return todo.status === "canceled";
            })
            .map((todo) => {
              return <TodoItem todoItem={todo} />;
            })}
        </List>
      </div>
      <Divider orientation="vertical" flexItem />
      <div>
        <h2>Completed</h2>
        <List>
          {props.todoItems
            .filter((todo) => {
              return todo.status === "completed";
            })
            .map((todo) => {
              return <TodoItem todoItem={todo} />;
            })}
        </List>
      </div>
    </div>
  );
}

TodoList.defaultProps = {
  todoItems: [],
  cancelTodoFunction: () => {},
  completeTodoFunction: () => {},
};

TodoList.propTypes = {
  todoItems: PropTypes.array,
  cancelTodoFunction: PropTypes.func,
  completeTodoFunction: PropTypes.func,
};

export default TodoList;
