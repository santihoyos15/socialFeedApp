import { Copyright, FooterComp, Logo } from './styles';
import tidalLogo from '../../assets/commons/svg/tidalLogo.svg';

export const Footer = () => (
  <FooterComp>
    <Logo src={tidalLogo} />
    <Copyright>©2019 Tidal Traffic. All rights reserved.</Copyright>
  </FooterComp>
);
