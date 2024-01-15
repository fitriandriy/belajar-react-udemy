import React, { useState } from "react";
import Button from "./Button";
import '../styles/FormInput.css'
import { useDispatch } from "react-redux";
import { addTask } from "../store/actions/task";

const FormInput = () => {
  const dispatch = useDispatch()
  const [text, setText] = useState("")
  const change = (e) => {
    setText(e.target.value)
  }
  const submit = (e) => {
    e.preventDefault()
    const data = {
      title: text
    }
    if (text !== "") {
      dispatch(addTask(data))
    }
    setText("")
  }
  return(
    <form style={inputForm} onSubmit={submit}>
      <input
        type="text"
        style={input}
        placeholder="add task"
        onChange={change}
        value={text}
      ></input>
      <Button text="add" variant="primary" action={submit}></Button>
    </form>
  )
}

export default FormInput;

const inputForm = {
  background: "white",
  color: "white",
  display: "flex",
  alignItems: "center",
  height: "3rem",
  padding: "0 3rem",
  justifyContent: "space-between",
  margin: "0.5rem 0"
}

const input = {
  width: "70%",
  border: "none"
}