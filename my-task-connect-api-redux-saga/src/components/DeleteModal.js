import React from "react";
import Button from "./Button";

class DeleteModal extends React.Component{
  render() {
    if (this.props.delete) {
      return(
        <div className="modal-container">
          <div className="modal-box">
            <h3>Are you sure you want to delete this todo?</h3>
            <Button
              text="Yes"
              variant="success"
              action={this.props.del}
            ></Button>
            <Button
              text="No"
              variant="warning"
              action={this.props.close}
            ></Button>
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

export default DeleteModal;