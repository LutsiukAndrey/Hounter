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
        <div className={s.header__position}>
          <div className={s.header_flex}>
            <a href="#" className={s.header__link}>
              <HandySvg src={logo} className={s.header__logo} />
              Hounter
            </a>

            <button className={s.menu_btn} type="button" data-menu-button>
              <svg className={s.menu_btn__svg} width="80" height="80">
                <use
                  className={s.menu_btn__svg_burger}
                  href="./img/sprite/sprite.svg#icon-burger"
                ></use>
                <use
                  className={s.menu_btn__svg_cross}
                  href="./img/sprite/sprite.svg#icon-cross"
                ></use>
              </svg>
            </button>

            <div className={s.menu_box} data-menu>
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
                  <a className={s.header_list__link} href="#">
                    Property
                    <svg className={s.header_list__svg}></svg>
                  </a>
                  <ul className={s.header_menu}>
                    <li className={s.header_menu__item}>
                      <a className={s.header_menu__link} href="#">
                        Property 1
                      </a>
                    </li>
                    <li className={s.header_menu__item}>
                      <a className={s.header_menu__link} href="#">
                        Property 2
                      </a>
                    </li>
                    <li className={s.header_menu__item}>
                      <a className={s.header_menu__link} href="#">
                        Property 3
                      </a>
                    </li>
                  </ul>
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
        </div>
      </Container>
    </header>
  );
};
