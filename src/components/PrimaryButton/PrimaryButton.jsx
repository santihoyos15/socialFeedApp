import { Button } from './styles';

export const PrimaryButton = ({ width, height, children }) => (
  <Button width={width} height={height}>
    {children}
  </Button>
);
