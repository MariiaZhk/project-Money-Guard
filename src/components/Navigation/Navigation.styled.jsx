import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavigation = styled.nav`
  height: 68px;
  display: flex;
  gap: 38px;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 768px) {
    height: 134px;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 40px;
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 0;
  position: relative;
  color:var(--transparency-40);
  text-decoration: none;

  &::after{
    content: '';
    width: 30px;
    height: 30px;
    background-color: transparent;
    position: absolute;
    border-radius: 8px;
    top: 4px;
    left: 4px;
    z-index: -10;
  }

  @media only screen and (min-width: 768px) {
    display: flex;
    height: 27px;
    align-items: center;

    p{
      margin-left: 23px;
      color: var(--white);
      font-size: 18px;
    }

    &::after{
      content: '';
      width: 10px;
      height: 10px;
      top: 4px;
      left: 4px;
    }
  }

`;

export const StyledIcon = styled.svg`
  fill:currentColor;

  @media only screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;