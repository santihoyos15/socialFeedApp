import styled from 'styled-components';
import landingPicture from '../../assets/commons/landingPicture.jpg';
import { device } from '../../utils/stylesHelpers';

const headerHeight = '100vh';

export const HeaderComp = styled.header`
  @media ${device.desktop} {
    display: flex;
    justify-content: space-between;
    height: ${headerHeight};
  }
`;

export const UpperHeader = styled.div`
  display: flex;
  height: 134px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--primary-color);
`;

export const Logo = styled.img`
  @media ${device.desktop} {
    position: absolute;
    top: 30px;
    left: 100px;
    z-index: 1;
  }
`;

export const LowerHeader = styled.div`
  height: 515px;
  background-image: url(${landingPicture});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 51px 26px;

  @media ${device.desktop} {
    width: 50vw;
    height: ${headerHeight};
  }
`;

export const LandingContent = styled.section`
  background-color: var(--primary-color);
  width: 100%;
  height: 413px;
  padding: 30px 26px;
  color: var(--secondary-font-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media ${device.desktop} {
    position: absolute;
    left: 0;
    width: 50vw;
    height: ${headerHeight};
    padding: 144px 100px;
    align-items: flex-start;
  }
`;

export const preTitle = styled.p`
  display: none;

  @media ${device.desktop} {
    font-size: 1.4rem;
    letter-spacing: 0.2em;
    text-align: left;
  }
`;

export const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 800;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: center;

  @media ${device.desktop} {
    font-size: 5rem;
    font-weight: 900;
    line-height: 62px;
    text-align: left;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: center;

  @media ${device.desktop} {
    font-size: 2rem;
    font-weight: 500;
    line-height: 34px;
    text-align: left;
  }
`;
export const PrimaryButton = styled.button`
  width: 100%;
  height: 80px;
  border: none;
  cursor: pointer;
  background-color: var(--secondary-color);
  font-family: var(--secondary-font);
  color: var(--secondary-font-color);
  font-weight: 800;
  font-size: 2.8rem;

  @media ${device.desktop} {
    width: 70%;
    font-size: 38px;
    line-height: 45px;
    letter-spacing: 0em;
  }
`;

export const SecondaryButton = styled.button`
  width: 169px;
  height: 44px;
  border: none;
  background-color: var(--secondary-font-color);
  color: var(--primary-font-color);
  font-family: var(--secondary-font);
  font-weight: 800;
  font-size: 20px;
  cursor: pointer;

  @media ${device.desktop} {
    position: absolute;
    top: 30px;
    right: 100px;
  }
`;

export const HyperLink = styled.a`
  color: inherit;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;

  @media ${device.desktop} {
    font-size: 2rem;
    font-weight: 500;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
