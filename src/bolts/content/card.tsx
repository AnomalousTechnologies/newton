import styled from 'styled-components';

const Card = styled.div<{ isActive?: boolean }>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background-color: ${({ isActive, theme }) => isActive ? theme.card.hover.color : theme.card.background.color};
  box-shadow: 0 0 4px 0 ${({ theme }) => theme.card.shadow.color};
  border-radius: 4px;
  transition: background-color 200ms;

  &:hover {
    background-color: ${({ theme }) => theme.card.hover.color};
    box-shadow: 0 0 4px 1px ${({ theme }) => theme.card.shadow.color};
    cursor: pointer;
  }
`;

export const ModalCard = styled(Card)`
  position: relative;
  max-width: 380px;
  min-height: 200px;
  padding: 2rem;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  box-shadow: 0 0 3px 2px ${({ theme }) => theme.card.shadow.color};

  &:hover {
    background-color: ${({ theme }) => theme.card.background.color};
    box-shadow: 0 0 3px 2px ${({ theme }) => theme.card.shadow.color};
    cursor: default;
  }
`;

export default Card;
