import styled from 'styled-components';

export default styled.h4`
  margin: 1rem 0;
  color: ${(props) => props.theme.text.color};
  font-family: ${(props) => props.theme.font.family.sans};
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.3;
`;
