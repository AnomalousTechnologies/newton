import styled from '@emotion/styled';

export default styled.button`
  display: inline-block;
  padding: .5rem 1.5rem;
  margin: 1rem 0 1.2rem;
  background-color: ${(props) => props.theme.button.default.backgroundColour};
  border-color: ${(props) => props.theme.button.default.borderColour};
  border-width: 1px;
  border-style: solid;
  color: ${(props) => props.theme.button.default.textColour};
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  line-height: 1.15rem;

  &:hover {
    background-color: ${(props) => props.theme.button.default.hoverColour};
  }
`;
