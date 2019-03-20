import styled from '@emotion/styled';

export default styled.a`
  color: ${(props) => props.theme.link.standard.color};
  text-decoration: ${(props) => props.theme.link.standard.decoration};
  background-color: transparent;

  &:active,
  &:visited {
    color: ${(props) => props.theme.link.standard.color};
  }

  &:focus {
    outline-color: ${(props) => props.theme.link.focus.outline.color};
  }

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.link.hover.color};
    text-decoration: ${(props) => props.theme.link.hover.decoration};
  }
`;
