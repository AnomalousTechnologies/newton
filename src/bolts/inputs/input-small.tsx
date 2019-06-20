import styled from 'styled-components';

export default styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: .5rem;
  margin: 0;
  font-family: ${(props) => props.theme.font.family.sans};
  font-size: 1rem;
  line-height: 1rem;
  color: ${(props) => props.theme.text.color};
  background-color: ${(props) => props.theme.input.background.color};
  border: 0;
  box-shadow: ${(props) => props.theme.input.shadow.color} 0 0 2px 1px inset;
  border-radius: 6px;
  overflow: visible;

  &:focus {
    outline: ${(props) => props.theme.input.outline.color} auto 4px;
  }
`;
