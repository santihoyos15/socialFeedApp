import styled from 'styled-components';
import { device } from '../../utils/stylesHelpers';

export const Section = styled.section`
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.desktop} {
    padding: 86px 100px;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const ContentLayout = styled.div`
  max-width: 60%;
`;

export const PreTitle = styled.p`
  font-size: 1.4rem;
  letter-spacing: 0.2em;
  text-align: center;

  @media ${device.desktop} {
    text-align: left;
  }
`;

export const Title = styled.h2`
  font-size: 2.6rem;
  font-weight: 800;
  line-height: 35px;
  letter-spacing: 0em;
  text-align: center;
  margin-top: 6px;

  @media ${device.desktop} {
    font-size: 4.8rem;
    line-height: 65px;
    text-align: left;
  }
`;

export const Text = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 20px;

  @media ${device.desktop} {
    font-size: 1.8rem;
    line-height: 31px;
    text-align: justified;
  }
`;

export const Badge = styled.img`
  margin-top: 20px;
`;
