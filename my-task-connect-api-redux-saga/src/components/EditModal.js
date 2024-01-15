import React from "react";
import Button from "../components/Button"
import "../styles/EditModal.css"

class EditModal extends React.Component{
  render() {
    if ( this.props.edit ) {
      return(
        <div className="modal-container">
          <div className="modal-box">
            <h3>Edit Task</h3>
            <div className="input">
              <input 
                type="text" 
                value={this.props.data.title} 
                onChange={this.props.change}
              ></input>
            </div>
            <div className="btn-group">
              <Button 
                text="save" 
                variant="primary" 
                action={this.props.update}
              ></Button>
              <Button
                text="cancel" 
                variant="warning" 
                action={this.props.close}
              ></Button>
            </div>
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

export default EditModal;