import styled from 'styled-components';
import { device } from '../../utils/stylesHelpers';

export const FeedSection = styled.section`
  background-color: var(--primary-color);
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  @media ${device.desktop} {
    margin-left: 100px;
    margin-right: 100px;
  }
`;
