import styled from '@emotion/styled';

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
  border-color: ${(props) => props.theme.input.border.color};
  border-style: solid;
  border-width: 1px;
  border-radius: 6px;
  overflow: visible;

  &:focus {
    outline: ${(props) => props.theme.input.outline.color} auto 4px;
  }
`;
