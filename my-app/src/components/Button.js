import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component {
  render() {
    return(
      <div>
        <button>Click</button>
      </div>
    )
  }
}



Button.propTypes = {
  color: PropTypes.string.isRequired
}

Button.defaultProps = {
  color: "merah"
}

export default Button;
