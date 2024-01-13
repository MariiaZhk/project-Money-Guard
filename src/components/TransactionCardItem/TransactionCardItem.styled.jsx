/**
  |============================
  | Mobile
  |============================
*/

import styled from 'styled-components';

export const Card = styled.li`
  width: 280px;
  height: 293px;

  position: relative;

  border-radius: 10px;
  background: rgba(82, 59, 126, 0.6);

  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px);

  display: flex;
  flex-direction: column;

  overflow: hidden;

  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const CardLine = styled.div`
  padding: 12px 20px 12px 15px;
  height: 48px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-child) {
    border-bottom: 1px solid #f1eaea61;
    margin-left: 5px;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 5px; // Ширина вертикальної лінії
    background: var(--dashboard-text, #ff868d); // Колір вертикальної лінії
    border-top-right-radius: 10px; // Закруглення зверху праворуч
    border-bottom-right-radius: 10px; // Закруглення знизу праворуч
  }
`;

export const CardLineTitle = styled.h4`
  color: var(--white, #fbfbfb);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const CardLineP = styled.p`
  color: var(--white, #fbfbfb);
  text-align: right;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const CardLinePSum = styled.p`
  color: var(--dashboard-text, #ff868d);
  text-align: right;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const CardLineButtonDelete = styled.button`
  display: inline-flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 2px;
  width: 69px;
  height: 29px;

  cursor: pointer;
  border: none;
  border-radius: 18px;
  background: var(
    --button-gradient,
    linear-gradient(97deg, #ffc727 -16.42%, #9e40ba 97.04%, #7000ff 150.71%)
  );

  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);

  color: #fff;

  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const CardLineButtonEdit = styled.button`
  background-color: transparent;
  border: none;

  color: var(--white-60, rgba(255, 255, 255, 0.6));
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;
  cursor: pointer;
`;

export const CardLinePEdit = styled.span`
  color: var(--white-60, rgba(255, 255, 255, 0.6));
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;
  cursor: pointer;
`;