import styled from 'styled-components';

// eslint-disable-next-line
export const Button = styled.button`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height};
  border: none;
  cursor: pointer;
  background-color: var(--secondary-color);
  font-family: var(--secondary-font);
  color: var(--secondary-font-color);
  font-weight: 800;
  font-size: 28px;
`;
