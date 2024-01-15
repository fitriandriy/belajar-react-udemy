import React from "react";
import Button from "./Button";
import PropTypes from 'prop-types';

const TodoItem = ( {todo, openDeleteModal, open} ) => {
  return(
    <div style={todoItem}>
      <p>{todo.title}</p> 
      <div>
        <Button 
          text="edit" 
          variant="success" 
          action={() => open(todo.id, todo.title)}
        ></Button>
        <Button 
          text="delete" 
          variant="warning" 
          action={() => {openDeleteModal(todo.id)}}
        ></Button>
      </div>
    </div>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem;

const todoItem = {
  background: "#2DA4F8",
  color: "white",
  display: "flex",
  alignItems: "center",
  height: "3rem",
  padding: "0 3rem",
  justifyContent: "space-between",
  margin: "0.5rem 0"
}