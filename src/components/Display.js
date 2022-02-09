import styled from "styled-components";

const StyledDisplay = styled.div`
  height: 50px;
  background-color: gray;
  width: 200px;
  outline: 1px solid black;
  color: white;
`;

export function Display(props) {
  const { value } = props;
  return (
    <StyledDisplay>
      {value}
    </StyledDisplay>
  );
}