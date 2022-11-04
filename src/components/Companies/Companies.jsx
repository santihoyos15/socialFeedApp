import { CompaniesSection, CompanyLogo } from './styles';
import forbes from '../../assets/commons/svg/forbes.svg';
import nytimes from '../../assets/commons/svg/nytimes.svg';
import theguardian from '../../assets/commons/svg/theguardian.svg';
import thetelegraph from '../../assets/commons/svg/thetelegraph.svg';
import usatoday from '../../assets/commons/svg/usatoday.svg';

export const Companies = () => (
  <CompaniesSection>
    <CompanyLogo src={forbes} />
    <CompanyLogo src={nytimes} />
    <CompanyLogo src={theguardian} />
    <CompanyLogo src={thetelegraph} />
    <CompanyLogo src={usatoday} />
  </CompaniesSection>
);
