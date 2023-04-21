import classNames from 'classnames';
import { Container } from 'components/Container/Container';
import s from './Subscribe.module.scss';

import EmailIcon from '@mui/icons-material/Email';

import fase from '../../img/portret1.png';
import fase2 from '../../img/portret2.png';
import fase3 from '../../img/portret3.png';
import fase4 from '../../img/portret4.png';
import interier from '../../img/subscribe1.png';
import interier2 from '../../img/subscribe2.png';
import interier3 from '../../img/subscribe3.png';
import interier4 from '../../img/subscribe4.png';

export const Subscribe = () => {
  return (
    <section className={s.subscribe} id="subscribe">
      <Container>
        <div className={s.subscribe__block}>
          <div className={s.subscribeLeftblock}>
            <ul className={s.subscribeLeftblock__list}>
              <li className={s.subscribeLeftblock__item}>
                <img
                  className={s.subscribeLeftblock__img}
                  src={interier}
                  alt="img"
                />
              </li>
              <li className={s.subscribeLeftblock__item}>
                <img
                  className={classNames(
                    s.subscribeLeftblock__img,
                    s.subscribeLeftblock__img_man
                  )}
                  src={fase2}
                  alt="img"
                />
              </li>
              <li className={s.subscribeLeftblock__item}>
                <img
                  className={classNames(
                    s.subscribeLeftblock__img,
                    s.subscribeLeftblock__img_girl
                  )}
                  src={fase}
                  alt="img"
                />
              </li>
              <li className={s.subscribeLeftblock__item}>
                <img
                  className={classNames(
                    s.subscribeLeftblock__img,
                    s.subscribeLeftblock__img_house
                  )}
                  src={interier2}
                  alt="img"
                />
              </li>
            </ul>
          </div>
          <div className={s.subscribeCenterblock}>
            <h2 className={s.subscribeCenterblock__title}>
              Subscribe For More Info and update from Hounter
            </h2>
            <form className={s.subscribeCenterblockForm}>
              <EmailIcon
                className={s.subscribeCenterblockForm__svg}
                width="24"
                height="24"
              />

              <input
                className={s.subscribeCenterblockForm__input}
                type="email"
                name="email"
                placeholder="Your email here"
              />
              <button className={s.subscribeCenterblockForm__btn} type="button">
                Subsribe Now
              </button>
            </form>
          </div>
          <div className={s.subscribeRightblock}>
            <ul className={s.subscribeRightblock__list}>
              <li className={s.subscribeRightblock__item}>
                <img
                  className={s.subscribeRightblock__img}
                  src={interier3}
                  alt="img"
                />
              </li>
              <li className={s.subscribeRightblock__item}>
                <img
                  className={classNames(
                    s.subscribeRightblock__img,
                    s.subscribeRightblock__img_girl
                  )}
                  src={fase3}
                  alt="img"
                />
              </li>
              <li className={s.subscribeRightblock__item}>
                <img
                  className={classNames(
                    s.subscribeRightblock__img,
                    s.subscribeRightblock__img_man
                  )}
                  src={fase4}
                  alt="img"
                />
              </li>
              <li className={s.subscribeRightblock__item}>
                <img
                  className={classNames(
                    s.subscribeRightblock__img,
                    s.subscribeRightblock__img_room
                  )}
                  src={interier4}
                  alt="img"
                />
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
