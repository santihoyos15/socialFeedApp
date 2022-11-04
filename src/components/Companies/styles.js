import styled from 'styled-components';
import { device } from '../../utils/stylesHelpers';

export const CompaniesSection = styled.section`
  display: none;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px;
  gap: 42px;

  @media ${device.desktop} {
    display: flex;
  }
`;

export const CompanyLogo = styled.img``;
