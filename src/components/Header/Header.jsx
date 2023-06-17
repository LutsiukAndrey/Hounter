import s from './Header.module.scss';
import classNames from 'classnames';
import { HandySvg } from 'handy-svg';
import logo from '../../img/logo.svg';
import backgroundBlue from '../../img/hero-blue.png';
import backgroundGreen from '../../img/hero-green.png';
import { Container } from 'components/Container/Container';

export const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.header_wraper}>
          <a href="/" className={s.header__link}>
            <HandySvg src={logo} className={s.header__logo} />
            Hounter
          </a>

          <div className={s.menu_box}>
            <ul className={s.header_list}>
              <li className={s.header_list__item}>
                <a className={s.header_list__link} href="#aboutUs">
                  About Us
                </a>
              </li>
              <li className={s.header_list__item}>
                <a className={s.header_list__link} href="#subscribe">
                  Subscribe
                </a>
              </li>
              <li className={classNames(s.width__submenu, s.header_list__item)}>
                <a className={s.header_list__link} href="/">
                  Property
                  <svg className={s.header_list__svg}></svg>
                </a>
              </li>
            </ul>

            <button className={s.header__btn} type="button">
              Sign Up!
            </button>
          </div>
        </div>

        <img
          className={classNames(s.header__img_blue, s.sheader__img)}
          src={backgroundBlue}
          alt="blue"
        />
        <img
          className={classNames(s.header__img, s.header__img_green)}
          src={backgroundGreen}
          alt="green"
        />
      </Container>
    </header>
  );
};
