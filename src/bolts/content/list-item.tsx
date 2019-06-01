import styled from 'styled-components';

export default styled.li`
  margin: 0 0 .3rem;
  color: ${(props) => props.theme.text.color};
  font-family: ${(props) => props.theme.font.family.sans};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.15rem;
`;
