import styled from 'styled-components';
import { device } from '../../utils/stylesHelpers';

const primaryButtonTop = '70px';

export const Section = styled.section`
  background-color: var(--primary-color);
  padding: 28px 14px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h2`
  color: var(--secondary-font-color);
  font-size: 2rem;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
  @media ${device.desktop} {
    font-size: 3.5rem;
    line-height: 53px;
    position: relative;
    top: calc(${primaryButtonTop} - 20px);
  }
`;

export const PrimaryButton = styled.button`
  width: 100%;
  height: 86px;
  border: none;
  cursor: pointer;
  background-color: var(--secondary-color);
  font-family: var(--secondary-font);
  color: var(--secondary-font-color);
  font-weight: 800;
  font-size: 28px;

  @media ${device.desktop} {
    position: relative;
    top: ${primaryButtonTop};
    width: 347px;
    margin: 0 auto;
  }
`;
