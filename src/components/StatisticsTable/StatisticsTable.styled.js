import styled from 'styled-components';

export const StyledCategorySelect = styled.select`
  width: 395px;
  height: 56px;
  padding: 16px 28px;
  border: none;
  border-radius: 8px;
  background-color: rgba(82, 59, 126, 0.6);
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px);

  color: #fbfbfb;
  font-size: 16px;
  font-family: Poppins;
  font-weight: 600;
`;

export const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 28px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.41);

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }

  span {
    width: 24px;
    height: 24px;
    background-color: #fed057;
    border-radius: 2px;
  }
`;

export const StyledExpenses = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 28px 3px;

  font-size: 14px;
  font-weight: 600;
  font-family: Poppins;

  p {
    color: #ff868d;
  }
`;

export const StyledIncome = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 28px 0;

  font-size: 14px;
  font-weight: 600;
  font-family: Poppins;

  p {
    color: #ffb627;
  }
`;
