import {
  HeaderComp,
  Logo,
  UpperHeader,
  LowerHeader,
  LandingContent,
  Title,
  Subtitle,
  HyperLink,
} from './styles';
import tidalLogo from '../../assets/commons/tidalLogo.svg';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import { SecondaryButton } from '../SecondaryButton/SecondaryButton';

export const Header = () => (
  <HeaderComp>
    <UpperHeader>
      <Logo src={tidalLogo} />
      <SecondaryButton>START QUIZ</SecondaryButton>
    </UpperHeader>
    <LowerHeader>
      <LandingContent>
        <Title>What's Your Online Advertising Readiness Rating?</Title>
        <Subtitle>
          When you take this quiz, you'll get a free report that outlines YOUR
          Readiness Rating.
        </Subtitle>
        <PrimaryButton height="74px">START QUIZ</PrimaryButton>
        <HyperLink href="#">Learn more about Readiness Raitings</HyperLink>
      </LandingContent>
    </LowerHeader>
  </HeaderComp>
);
