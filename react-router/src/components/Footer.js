import React from "react";

const Footer = () => {
  return (
    <div style={footer}>
      <h1>Component Footer</h1>
    </div>
  )
}

export default Footer;

const footer = {
  display: "flex",
  background: "#fe024e",
  justifyContent: "center",
  color: "white",
  alignItems: "center",
  padding: "0 20px",
  position: "absolute",
  bottom: "0",
  width: "100%"
}