import React from "react";
import Button from "./Button";
import '../styles/FormInput.css'

class FormInput extends React.Component{
  state = {
    text: ""
  }
  change = e => {
    this.setState({ text: e.target.value })
  }
  submit = e => {
    e.preventDefault()
    if (this.state.text !== "") {
      this.props.add(this.state.text)
    }
    this.setState({
      text: ""
    })
  }
  render(){
    return(
      <form style={inputForm} onSubmit={this.submit}>
        <input
          type="text"
          style={input}
          placeholder="add task"
          onChange={this.change}
          value={this.state.text}
        ></input>
        <Button text="add" variant="primary" action={this.submit}></Button>
      </form>
    )
  }
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