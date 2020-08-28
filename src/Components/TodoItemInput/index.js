import React, { useState } from "react";
import PropTypes from 'prop-types';
import { TextField, Button, Grid } from "@material-ui/core";

const AddTodoItem = (props) => {
  const [todoFieldValue, setTodoFieldValue] = useState("");

  return (
    <Grid
      id="todo-input-container"
      container
      direction="row"
      alignItems="center"
      spacing={3}
    >
      <Grid item xs={3}>
        <TextField
          fullWidth={true}
          id="standard-basic"
          label="Todo Item"
          onChange={(inputEvent) => setTodoFieldValue(inputEvent.target.value)}
        />
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => props.addTodoItemFunction(todoFieldValue)}
        >
          Add Todo Item
        </Button>
      </Grid>
    </Grid>
  );
};


AddTodoItem.propTypes = {
    addTodoItemFunction: PropTypes.func.isRequired,
}

export default AddTodoItem;
