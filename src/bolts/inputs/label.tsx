import styled from 'styled-components';

export default styled.label`
  box-sizing: border-box;
  display: block;
  width: 100%;
  font-size: 1rem;
  font-family: ${(props) => props.theme.font.family.sans};
  font-weight: 500;
  line-height: 1rem;
  color: ${(props) => props.theme.text.color};
`;
