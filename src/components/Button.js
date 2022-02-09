import { useState } from "react";
import styled from "styled-components";
import { useComputeContext } from "../utils";

const handleBackgroundColor = (props) => {
  const { isActive, isOperator } = props;
  if (isActive) {
    return "blue";
  } else {
    return isOperator ? `orange` : `gray`;
  }
}

const StyledButton = styled.button`
  width: ${p => p.large ? `100px` : `50px`};
  height: 50px;
  background-color: ${p => handleBackgroundColor(p)};
  text-align: center;
  color: white;
  font-weight: bold;
  outline: 1px solid black;
  border: none;
  &:hover {
    background-color: red;
  }
`;

export function Button(props) {
  const { value } = props;
  const [isActive, setActive] = useState(false);
  const { getButtonProps } = useComputeContext();

  return (
    <StyledButton {
      ...getButtonProps({
        ...props, 
        isActive, 
        setActive
        })}>
      {value}
    </StyledButton>
  );
}