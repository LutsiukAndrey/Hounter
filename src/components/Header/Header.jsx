import s from './Header.module.scss';
import classNames from 'classnames';
import { HandySvg } from 'handy-svg';
import logo from '../../img/logo.svg';
import backgroundBlue from '../../img/hero-blue.png';
import backgroundGreen from '../../img/hero-green.png';
import NestedList from './Burger/Burger';
import { useMediaQuery } from '@mui/material';

export const Header = () => {
  const mobile = useMediaQuery('(max-width:765px)');

  return (
    <header className={s.header}>
      <>
        <div className={s.header_wraper}>
          <a href="/" className={s.header__link}>
            <HandySvg src={logo} className={s.header__logo} />
            Hounter
          </a>
          {(mobile && <NestedList />) || (
            <div className={s.header_menu_box}>
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
                <li
                  className={classNames(s.width__submenu, s.header_list__item)}
                >
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
          )}
        </div>

        <img
          className={classNames(s.header__img, s.header__img_green)}
          src={backgroundBlue}
          alt="blue"
        />
        <img
          className={classNames(s.header__img, s.header__img_blue)}
          src={backgroundGreen}
          alt="green"
        />
      </>
    </header>
  );
};
