import classNames from 'classnames';
import s from './Recomendation.module.scss';
import firstRecomendation from '../../img/sprite/sprite.svg#icon-recommendation1';
import leftArrow from '../../img/sprite/sprite.svg#icon-arrow-left';
import { RecomendationCard } from './RecomendationCard/RecomendationCard';
import { Container } from 'components/Container/Container';

export const Recomendation = () => {
  return (
    <section className={s.recommendation}>
      <Container>
        <p
          className={classNames(
            s.recommendation__text,
            s.goldText,
            s.animation_top
          )}
        >
          Our Recommendation
        </p>

        <div className={s.recommendation__flex}>
          <h2 className={classNames(s.recommendation__title, s.animation_left)}>
            Featured House
          </h2>

          <form className={s.recommendationForm}>
            <ul
              className={classNames(s.recommendationBtnsList, s.animation_top)}
            >
              <li className={s.recommendationBtnsList__item}>
                <label className={s.labelRadiobtn} for="radio1">
                  <input
                    className={s.labelRadiobtn__input}
                    type="radio"
                    name="radiotn"
                    id="radio1"
                  />
                  <span className={s.labelRadiobtn__span}>
                    <svg className={s.labelRadiobtn__svg}>
                      <use href={firstRecomendation}></use>
                    </svg>
                    House
                  </span>
                </label>
              </li>

              <li className={s.recommendationBtnsList__item}>
                <label className={s.labelRadiobtn} for="radio2">
                  <input
                    className={s.labelRadiobtn__input}
                    type="radio"
                    name="radioBtn"
                    id="radio2"
                  />
                  <span className={s.labelRadiobtn__span}>
                    <svg className={s.labelRadiobtn__svg}>
                      <use href="./img/sprite/sprite.svg#icon-recommendation2"></use>
                    </svg>
                    Villa
                  </span>
                </label>
              </li>
              <li className={s.recommendationBtnsList__item}>
                <label className={s.labelRadiobtn} for="radio3">
                  <input
                    className={s.labelRadiobtn__input}
                    type="radio"
                    name="radioBtn"
                    id="radio3"
                  />
                  <span className={s.labelRadiobtn__span}>
                    <svg className={s.labelRadiobtn__svg}>
                      <use href="./img/sprite/sprite.svg#icon-recommendation3"></use>
                    </svg>
                    Apartment
                  </span>
                </label>
              </li>
            </ul>

            <ul
              className={classNames(s.recommendationListBtn, s.animation_left)}
              // data-animation="left"
            >
              <li className={s.recommendationListBtn__item}>
                <button className={s.recommendationListBtn__btn} type="button">
                  <svg className={s.recommendationListBtn__svg}>
                    <use href={leftArrow}></use>
                  </svg>
                </button>
              </li>
              <li className={s.recommendationListBtn__item}>
                <button className={s.recommendationListBtn__btn} type="button">
                  <svg className={s.recommendationListBtn__svg}>
                    <use href="./img/sprite/sprite.svg#icon-arrow-right"></use>
                  </svg>
                </button>
              </li>
            </ul>
          </form>
        </div>

        <ul className={s.recommendationList}>
          <RecomendationCard />
          <RecomendationCard />
          <RecomendationCard />
        </ul>
      </Container>
    </section>
  );
};
