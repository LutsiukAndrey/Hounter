import s from './Hero.module.scss';
import classNames from 'classnames';

import heroImg from '../../img/hero.png';
import heroLine from '../../img/lines.png';
import secondPortret from '../../img/portret2.png';
import thirdPortret from '../../img/portret3.png';
import forthPortret from '../../img/portret4.png';
import house from '../../img/heroHouse.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Form } from './Form/Form';
import { Partnership } from './Partnership/Partnership';

export const Hero = () => {
  return (
    <>
      <section className={s.hero}>
        <div className={s.hero__position}>
          <div className={classNames(s.heroLeftblock)}>
            <h1 className={s.heroLeftblock__title}>
              Find the place to live
              <span className={s.heroLeftblock__span}> Your dreams</span> easily
              here
            </h1>
            <p className={s.heroLeftblock__text}>
              Everything you need about finding your place to live will be here,
              where it will be easier for you
            </p>
            <Form />

            <p className={s.heroLeftblock__underText}>Our Partnership</p>

            <Partnership />
          </div>

          <div className={classNames(s.hero_rightblock)}>
            <img src={heroImg} className={s.hero_rightblock__img} alt="hero" />
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
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa99jqN7Q3fO3BSTVAkys1mKjv7b9CBpS_A2T28kq_Fg4AtexqZe2FyGaa9Y8bEMe941M&usqp=CAU"
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
      </section>
    </>
  );
};
