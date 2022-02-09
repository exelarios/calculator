import styled from "styled-components";

const StyledButton = styled.button`
  width: ${p => p.large ? `100px` : `50px`};
  height: 50px;
  background-color: gray;
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
  return (
    <StyledButton {...props}>
      {value}
    </StyledButton>
  );
}