import styled from '@emotion/styled';

export default styled.code`
  display: inline-block;
  padding: .5rem 1rem;
  margin: 0 0 1rem;
  font-family: ${(props) => props.theme.font.family.mono};
  font-size: .8rem;
  line-height: 1.5;
  background-color: ${(props) => props.theme.color.select.tonal[0]};
`;
