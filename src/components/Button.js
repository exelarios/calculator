import styled from "styled-components";
import { useComputeContext } from "../utils";

const StyledButton = styled.button`
  width: ${p => p.large ? `100px` : `50px`};
  height: 50px;
  background-color: ${p => p.isOperator ? `orange` : `gray`};
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
  const { getButtonProps } = useComputeContext();

  return (
    <StyledButton {...getButtonProps(props)}>
      {value}
    </StyledButton>
  );
}