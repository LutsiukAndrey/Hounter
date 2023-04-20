import classNames from 'classnames';
import s from './Footer.module.scss';
import { Container } from 'components/Container/Container';
import { HandySvg } from 'handy-svg';
import logo from '../../img/logo.svg';
import green from '../../img/footer-green.png';
import blue from '../../img/footer-blue.png';

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
          <div className={classNames(s.footerLeftblock, s.animationLeft)}>
            <a href="#" className={s.footerLeftblock__link}>
              <HandySvg
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
                <a className={s.footerLeftblock__socialLink} href="#">
                  <svg
                    className={s.footerLeftblock__svg}
                    width="32"
                    height="32"
                  >
                    <use href="./img/sprite/sprite.svg#icon-footer1"></use>
                  </svg>
                </a>
              </li>
              <li className={s.footerLeftblock__item}>
                <a className={s.footerLeftblock__socialLink} href="#">
                  <svg
                    className={s.footerLeftblock__svg}
                    width="32"
                    height="32"
                  >
                    <use href="./img/sprite/sprite.svg#icon-footer2"></use>
                  </svg>
                </a>
              </li>
              <li className={s.footerLeftblock__item}>
                <a className={s.footerLeftblock__socialLink} href="#">
                  <svg
                    className={s.footerLeftblock__svg}
                    width="32"
                    height="32"
                  >
                    <use href="./img/sprite/sprite.svg#icon-footer3"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className={s.footerRightblock}>
            <ul className={s.footerRightblock__list}>
              <li
                className={classNames(s.footerRightblock__item, s.animationTop)}
              >
                <p className={s.footerRightblock__text}>Property</p>
                <ul className={s.footerSecondList}>
                  <li className={s.footerSecondList__item}>
                    <a className={s.footerSecondList__link} href="#">
                      House
                    </a>
                  </li>
                  <li className={s.footerSecondList__item}>
                    <a className={s.footerSecondList__link} href="#">
                      Apartment
                    </a>
                  </li>
                  <li className={s.footerSecondList__item}>
                    <a className={s.footerSecondList__link} href="#">
                      Villa
                    </a>
                  </li>
                </ul>
              </li>
              <li
                className={classNames(s.footerRightblock__item, s.animationTop)}
              >
                <p className={s.footerRightblock__text}>Article</p>
                <ul className={s.footerSecondList}>
                  <li className={s.footerSecondList__item}>
                    <a className={s.footerSecondList__link} href="#">
                      New Article
                    </a>
                  </li>
                  <li className={s.footerSecondList__item}>
                    <a className={s.footerSecondList__link} href="#">
                      Popular Article
                    </a>
                  </li>
                  <li className={s.footerSecondList__item}>
                    <a className={s.footerSecondList__link} href="#">
                      Most Read
                    </a>
                  </li>
                  <li className={s.footerSecondList__item}>
                    <a className={s.footerSecondList__link} href="#">
                      Tips & Tricks
                    </a>
                  </li>
                </ul>
              </li>
              <li
                className={classNames(s.footerRightblock__item, s.animationTop)}
              >
                <p className={s.footerRightblock__text}>Contact</p>
                <ul className={s.footerSecondList}>
                  <li className={s.footerSecondList__item}>
                    <a className={s.footerSecondList__link} href="#">
                      2464 Royal Ln. Mesa, New Jersey 45463
                    </a>
                  </li>
                  <li className={s.footerSecondList__item}>
                    <a
                      className={s.footerSecondList__link}
                      href="tel:6715550110"
                    >
                      (671) 555-0110
                    </a>
                  </li>
                  <li className={s.footerSecondList__item}>
                    <a
                      className={s.footerSecondList__link}
                      href="mailto:info@hounter.com"
                    >
                      info@hounter.com
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
