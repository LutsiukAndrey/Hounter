import classNames from 'classnames';
import s from './Footer.module.scss';
import { Container } from 'components/Container/Container';
import { HandySvg } from 'handy-svg';
import logo from '../../img/logo.svg';
import green from '../../img/footer-green.png';
import blue from '../../img/footer-blue.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Article } from './Article/Article';
import { Property } from './Property/Property';
import { Contacts } from './Contacts/Contacts';

export const Footer = () => {
  return (
    <section className={s.footer}>
      <Container>
        <div className={s.footer__block}>
          <img className={s.footer__img} src={blue} alt="png" />
          <img
            className={classNames(s.footer__img, s.footer__img_green)}
            src={green}
            alt="png"
          />
          <div className={s.footerLeftblock}>
            <a href="/" className={s.footerLeftblock__link}>
              <HandySvg
                height="32px"
                width="32px"
                src={logo}
                className={s.footerLeftblock__logo}
                alt="logo"
              />
              Hounter
            </a>
            <p className={s.footerLeftblock__text}>
              We provide information about properties such as houses, villas and
              apartments to help people find their dream home
            </p>

            <ul className={s.footerLeftblock__list}>
              <li className={s.footerLeftblock__item}>
                <a className={s.footerLeftblock__socialLink} href="/">
                  <FacebookIcon
                    className={s.footerLeftblock__svg}
                    width="32"
                    height="32"
                  />
                </a>
              </li>
              <li className={s.footerLeftblock__item}>
                <a className={s.footerLeftblock__socialLink} href="/">
                  <TwitterIcon
                    className={s.footerLeftblock__svg}
                    width="32"
                    height="32"
                  />
                </a>
              </li>
              <li className={s.footerLeftblock__item}>
                <a className={s.footerLeftblock__socialLink} href="/">
                  <InstagramIcon
                    className={s.footerLeftblock__svg}
                    width="32"
                    height="32"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className={s.footerRightblock}>
            <ul className={s.footerRightblock__list}>
              <Property />
              <Article />
              <Contacts />
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
