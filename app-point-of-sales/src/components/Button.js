import React from "react";
import styled from "styled-components";

const MyButton = styled.button`
 height: 1.7rem;
 width: 6rem;
 border: 0;
 padding: 0.2rem 0.5rem;
 color: white;
 text-align: center;
 cursor: pointer;
 &:foxus (
  outline: 0;
 )
`
const PrimaryButton = styled(MyButton)`
  background: ${props => props.theme.primary}
`
const WarningButton = styled(MyButton)`
  background: ${props => props.theme.tertiary}
`
const Button = ({primary, action, text}) => {
  if(primary) {
    return (
      <PrimaryButton onClick={action}>{text}</PrimaryButton>
    )
  } else {
    return <WarningButton onClick={action}>{text}</WarningButton>
  }
}

export default Button;