import React, { useContext, useState } from "react";
import Textarea from "react-textarea-autosize"
import "../sass/Button.scss"
import { DataContext } from "../context/store";

const Button = ({id, list}) => {
  const { cardAdd, listAdd } = useContext(DataContext)
  const [open, setOpen] = useState(false)
  const [text, setText] = useState("")
  const handleChange = (e) => setText(e.target.value)
  const addCard = () => {
    if(text) {
      cardAdd(id, text)
    }
    setText("")
  }
  const addList = () => {
    if(text) {
      listAdd(text)
    }
    setText("")
  }
  const openForm = () => setOpen(true)
  const closeForm = () => setOpen(false)
  const showForm = () => {
    const textButton = list ? "Add list" : "Add card"
    const placeholder = list ? "Enter list title" : "Enter card title"
    return (
      <div className="form-box">
        <Textarea 
          className="text-area"
          placeholder={placeholder}
          onBlur={closeForm}
          value={text}
          onChange={handleChange}
          autoFocus
        />
        <button className="add" onMouseDown={ list ? addList : addCard }>{textButton}</button>
        <button className="close" onClick={closeForm}>Close</button>
      </div>
    )
  }
  const showButton = () => {
    const textButton = list ? "+ add new list" : "+ add new card"
    const opacityButton = list ? 1 : 0.5
    const colorButton = list? "white" : "inherit"
    const backgroundButton = list? "rgba(0,0,0,0.25)" : "inherit" 
    return (
      <div
        className="add-btn"
        onClick={openForm}
        style={{
          opacity: opacityButton,
          color: colorButton,
          background: backgroundButton
        }}
      >{textButton}</div>
    )
  }
  return open ? showForm() : showButton()
}

export default Button