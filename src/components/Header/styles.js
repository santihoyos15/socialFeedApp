import styled from 'styled-components';
import landingPicture from '../../assets/commons/landingPicture.jpg';

export const HeaderComp = styled.header``;

export const UpperHeader = styled.div`
  display: flex;
  height: 134px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--primary-color);
`;

export const Logo = styled.img``;

export const LowerHeader = styled.div`
  height: 515px;
  background-image: url(${landingPicture});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 51px 26px;
`;

export const LandingContent = styled.section`
  background-color: var(--primary-color);
  width: 100%;
  height: 413px;
  padding: 30px 26px;
  color: #ffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 800;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: center;
`;

export const Subtitle = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: center;
`;

export const HyperLink = styled.a`
  color: inherit;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
`;
