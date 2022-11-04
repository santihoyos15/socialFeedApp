import styled from 'styled-components';
import { device } from '../../utils/stylesHelpers';

export const FooterComp = styled.footer`
  background-color: var(--primary-color);
  padding: 28px 30px;
  display: flex;
  justify-content: space-between;

  @media ${device.desktop} {
    background-color: (var(--grey));
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Logo = styled.img``;

export const Copyright = styled.p`
  color: var(--secondary-font-color);
  font-family: SF Compact Display;
  font-size: 1.8rem;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  max-width: 154px;

  @media ${device.desktop} {
    color: var(--primary-font-color);
    background-color: (var(--grey));
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 14px;
  }
`;
