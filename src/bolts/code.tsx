import styled from '@emotion/styled';

export default styled.code`
  display: inline-block;
  padding: .5rem;
  margin: 0 0 1rem;
  font-family: ${(props) => props.theme.font.family.mono};
  font-size: .8rem;
  background-color: ${(props) => props.theme.colour.select.grey[0]};
`;
