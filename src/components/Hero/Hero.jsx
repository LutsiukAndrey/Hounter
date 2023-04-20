import s from './Hero.module.scss';
import classNames from 'classnames';
import { HandySvg } from 'handy-svg';
import geo from '../../img/search.svg';
import arrowRight from '../../img/sprite/sprite.svg#icon-arrow-right';
import treveloca from '../../img/partner1.svg';
import tiket from '../../img/partner2.svg';
import airbnb from '../../img/partner3.svg';
import tripAbvisor from '../../img/partner4.svg';
import heroImg from '../../img/hero.png';
import heroLine from '../../img/hero-line.png';
import firstPortret from '../../img/recommen-portret1.png';
import secondPortret from '../../img/recommen-portret2.png';
import thirdPortret from '../../img/recommen-portret3.png';
import forthPortret from '../../img/recommen-portret4.png';
import house from '../../img/hero-ellipse4.png';
import { Container } from 'components/Container/Container';

export const Hero = () => {
  return (
    <>
      <section className={s.hero}>
        <Container>
          <div className={s.hero__position}>
            <div className={classNames(s.heroLeftblock, s.animationLeft)}>
              <h1 className={s.heroLeftblock__title}>
                find the place to live
                <span className={s.heroLeftblock__span}>your dreams</span>{' '}
                easily here
              </h1>
              <p className={s.heroLeftblock__text}>
                Everything you need about finding your place to live will be
                here, where it will be easier for you
              </p>
              <form className={s.hero_form}>
                <img
                  src={geo}
                  className={s.hero_form__img_search}
                  alt="search"
                />
                <input
                  className={s.hero_form__input}
                  type="text"
                  name="text"
                  placeholder="Search for the location you want!"
                />

                <button className={s.hero_form__btn}>
                  Search
                  <svg className={s.hero_form__svg}>
                    {/* dont work arrow */}
                    <use href={arrowRight}></use>
                  </svg>
                </button>
              </form>

              <p className={s.heroLeftblock__underText}>Our Partnership</p>

              <ul className={s.hero_partner}>
                <li className={s.hero_partner__item}>
                  <a href="#" className={s.hero_partner__link}>
                    <img
                      src={treveloca}
                      className={s.hero_partner__img}
                      alt="partner"
                    />
                  </a>
                </li>
                <li className={s.hero_partner__item}>
                  <a href="#" className={s.hero_partner__link}>
                    <img
                      src={tiket}
                      className={s.hero_partner__img}
                      alt="partner"
                    />
                  </a>
                </li>
                <li className={s.hero_partner__item}>
                  <a href="#" className={s.hero_partner__link}>
                    <img
                      src={airbnb}
                      className={s.hero_partner__img}
                      alt="partner"
                    />
                  </a>
                </li>
                <li className={s.hero_partner__item}>
                  <a href="#" className={s.hero_partner__link}>
                    <img
                      src={tripAbvisor}
                      className={s.hero_partner__img}
                      alt="partner"
                    />
                  </a>
                </li>
              </ul>
            </div>

            <div
              className={classNames(s.hero_rightblock, s.animationLeft)}
              //   data-animation="left"
            >
              <img
                src={heroImg}
                className={s.hero_rightblock__img}
                alt="hero"
              />
              <img
                src={heroLine}
                className={s.hero_rightblock__img_line}
                alt="lines"
              />
              <ul className={s.rightblock_list}>
                <li className={s.rightblock_list__item}>
                  <div className={s.rightblock_list__flex}>
                    <ul className={s.rightblock_img}>
                      <li className={s.rightblock_img__item}>
                        <img
                          src={thirdPortret}
                          className={s.rightblock_img__img}
                          alt="img"
                        />
                      </li>
                      <li className={s.rightblock_img__item}>
                        <img
                          src={secondPortret}
                          className={s.rightblock_img__img}
                          alt="img"
                        />
                      </li>
                      <li className={s.rightblock_img__item}>
                        <img
                          src={firstPortret}
                          className={s.rightblock_img__img}
                          alt="img"
                        />
                      </li>
                    </ul>
                    <div className={s.rightblock_list__after_hoto}>
                      <h2 className={s.rightblock_list__title}>1K+ People</h2>
                      <p className={s.rightblock_list__text}>
                        Successfully Getting Home
                      </p>
                    </div>
                  </div>
                </li>
                <li className={s.rightblock_list__item}>
                  <div className={s.rightblock_list__flex}>
                    <img
                      src={house}
                      className={s.rightblock_list__img}
                      alt="img"
                    />
                    <div>
                      <h2 className={s.rightblock_list__title}>56 Houses</h2>
                      <p className={s.rightblock_list__text}>Sold Monthly</p>
                    </div>
                  </div>
                </li>
                <li className={s.rightblock_list__item}>
                  <div className={s.rightblock_list__flex}>
                    <img
                      src={forthPortret}
                      className={s.rightblock_list__img}
                      alt="img"
                    />
                    <div>
                      <h2 className={s.rightblock_list__title}>4K+</h2>
                      <p className={s.rightblock_list__text}>
                        People Looking for New Homes
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
