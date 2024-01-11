import React from "react";
import PropTypes from 'prop-types';
import '../styles/Button.css'

const Button = ({ load, variant, text, action }) => {
  return(
    <button className={`btn btn-${ variant }`} onClick={action}>
      { load ? "loading..." : text }
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  action: PropTypes.func
}

export default Button;
