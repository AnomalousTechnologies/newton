import styled from '@emotion/styled';

export default styled.button`
  display: inline-block;
  padding: .5rem 1.5rem;
  margin: 0;
  background-color: ${(props) => props.theme.button.default.background.color};
  border-color: ${(props) => props.theme.button.default.border.color};
  border-width: 1px;
  border-style: solid;
  color: ${(props) => props.theme.button.default.color};
  font-family: ${(props) => props.theme.font.family.sans};
  font-size: 1rem;
  font-weight: 600;
  border-radius: 6px;
  text-decoration: none;
  text-transform: none;
  line-height: 1.15rem;
  overflow: visible;

  &:focus {
    outline-color: ${(props) => props.theme.button.default.focus.color};
  }

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.button.default.hover.color};
  }
`;
