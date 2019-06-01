import styled from 'styled-components';

export default styled.a`
  color: ${(props) => props.theme.link.standard.color};
  text-decoration: ${(props) => props.theme.link.standard.decoration};
  background-color: transparent;

  &:active,
  &:visited {
    color: ${(props) => props.theme.link.standard.color};
  }

  &:focus {
    outline: ${(props) => props.theme.link.focus.color} auto 4px;
  }

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.link.hover.color};
    text-decoration: ${(props) => props.theme.link.hover.decoration};
  }
`;
