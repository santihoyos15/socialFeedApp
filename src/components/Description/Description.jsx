import { Badge, Text, ContentLayout, PreTitle, Section, Title } from './styles';
import descriptionBadge from '../../assets/commons/svg/descriptionBadge.svg';

export const Description = () => (
  <Section>
    <ContentLayout>
      <PreTitle>Why IT IS IMPORTANT</PreTitle>
      <Title>Knowing Your Online Ads Readiness Raiting...</Title>
      <Text>
        ...will help you understand just how bullish you should be with your ad
        spend and where your blind spots are. When it comes to online
        advertising the more informed and ready you are, the more effective your
        advertising will be (and the greater your chances of a healthy Return on
        your Ad Spend (ROAS)). Find Out your Online Advertising Readiness Rating
        so you can make more money and avoid risks with your online advertising.
      </Text>
    </ContentLayout>
    <Badge src={descriptionBadge} />
  </Section>
);
