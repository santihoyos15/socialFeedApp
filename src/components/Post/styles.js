import styled from 'styled-components';
import { device } from '../../utils/stylesHelpers';

export const Layout = styled.div``;

export const PostCard = styled.article`
  background-color: var(--secondary-font-color);
  padding: 30px 25px;
  border-radius: 8px;
`;

export const Content = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 20px;
  @media ${device.desktop} {
    font-size: 1.8rem;
    line-height: 27px;
  }
`;

export const Author = styled.p`
  color: var(--primary-color);
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 27px;
`;

export const Date = styled.p`
  color: var(--secondary-font-color);
  font-size: 1.6rem;
  font-weight: 700;
  margin-top: 10px;

  @media ${device.desktop} {
    font-size: 2rem;
  }
`;
