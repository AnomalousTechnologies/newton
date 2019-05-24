import styled from '@emotion/styled';

export default styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.card.background.color};
  box-shadow: 0 0 4px 0 ${({ theme }) => theme.card.shadow.color};
  border-radius: 4px;
  transition: background-color 200ms;

  &:hover {
    background-color: ${({ theme }) => theme.card.hover.color};
    cursor: pointer;
  }
`;
