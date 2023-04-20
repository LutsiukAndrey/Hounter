import s from './Hero.module.scss';
import classNames from 'classnames';
import PlaceIcon from '@mui/icons-material/Place';
import treveloca from '../../img/partner1.svg';
import tiket from '../../img/partner2.svg';
import airbnb from '../../img/partner3.svg';
import tripAbvisor from '../../img/partner4.svg';
import heroImg from '../../img/hero.png';
import heroLine from '../../img/lines.png';
import firstPortret from '../../img/portret1.png';
import secondPortret from '../../img/portret2.png';
import thirdPortret from '../../img/portret3.png';
import forthPortret from '../../img/portret4.png';
import house from '../../img/heroHouse.png';
import { Container } from 'components/Container/Container';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Hero = () => {
  return (
    <>
      <section className={s.hero}>
        <Container>
          <div className={s.hero__position}>
            <div className={classNames(s.heroLeftblock)}>
              <h1 className={s.heroLeftblock__title}>
                find the place to live
                <span className={s.heroLeftblock__span}> Your dreams</span>{' '}
                easily here
              </h1>
              <p className={s.heroLeftblock__text}>
                Everything you need about finding your place to live will be
                here, where it will be easier for you
              </p>
              <form className={s.hero_form}>
                <PlaceIcon className={s.hero_form__geo_search} />

                <input
                  className={s.hero_form__input}
                  type="text"
                  name="text"
                  placeholder="Search for the location you want!"
                />

                <button className={s.hero_form__btn}>
                  Search
                  <ArrowForwardIosIcon />
                </button>
              </form>

              <p className={s.heroLeftblock__underText}>Our Partnership</p>

              <ul className={s.hero_partner}>
                <li className={s.hero_partner__item}>
                  <a
                    href="https://www.traveloka.com/en-en/"
                    target="_blank"
                    rel="noreferrer"
                    className={s.hero_partner__link}
                  >
                    <img
                      src={treveloca}
                      className={s.hero_partner__img}
                      alt="partner"
                    />
                  </a>
                </li>
                <li className={s.hero_partner__item}>
                  <a
                    href="https://tickets.ua/"
                    target="_blank"
                    rel="noreferrer"
                    className={s.hero_partner__link}
                  >
                    <img
                      src={tiket}
                      className={s.hero_partner__img}
                      alt="partner"
                    />
                  </a>
                </li>
                <li className={s.hero_partner__item}>
                  <a
                    href="https://www.airbnb.com.ua/"
                    target="_blank"
                    rel="noreferrer"
                    className={s.hero_partner__link}
                  >
                    <img
                      src={airbnb}
                      className={s.hero_partner__img}
                      alt="partner"
                    />
                  </a>
                </li>
                <li className={s.hero_partner__item}>
                  <a
                    href="https://www.tripadvisorsupport.com/en-US/hc/traveler"
                    target="_blank"
                    rel="noreferrer"
                    className={s.hero_partner__link}
                  >
                    <img
                      src={tripAbvisor}
                      className={s.hero_partner__img}
                      alt="partner"
                    />
                  </a>
                </li>
              </ul>
            </div>

            <div className={classNames(s.hero_rightblock)}>
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
