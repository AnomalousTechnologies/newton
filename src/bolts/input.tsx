import styled from '@emotion/styled';

export default styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: .5rem;
  margin-bottom: 1.2rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme.inputs.backgroundColour};
  box-shadow: 0 0 0px 1px rgba(0,0,0,.4);
  border: 0;
  outline-color: ${(props) => props.theme.inputs.outlineColour};
  line-height: 1rem;
`;
