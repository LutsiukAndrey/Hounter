import s from './RecomendationCard.module.scss';
import house from '../../../img/recommen-house4.jpg';
import classNames from 'classnames';
import portret from '../../../img/partner-ellipse3.png';

export const RecomendationCard = () => {
  return (
    <li className={classNames(s.recommendationItem__item, s.animation_left)}>
      <div className={s.recommendationItem__content}>
        <img src={house} className={s.recommendationItem__img} alt="img" />
        <div
          className={classNames(
            s.recommendationItem_position,
            s.recommendationItem_position_four
          )}
        >
          {/* <svg className={s.recommendationItem_position__svg}>
            <use href="./img/sprite/sprite.svg#icon-recommendation-fire"></use>
          </svg> */}
          <p
            className={classNames(
              s.recommendationItem_position__text,
              s.recommendationItem_position__text_red
            )}
          >
            Popular
          </p>
        </div>
      </div>
      <div className={s.recommendationItem__firstContent}>
        <h2 className={s.recommendationItem__title}>Cosmo's House</h2>
        <p className={s.recommendationItem__price}>$ 22.000.000</p>
      </div>
      <div className={s.recommendationItem__secondContent}>
        <img
          src={portret}
          className={s.recommendationItem__under_img}
          alt="img"
        />
        <div>
          <h3 className={s.recommendationItem__underTitle}>Jenny Wilson</h3>
          <p className={s.recommendationItem__underText}>
            Preston Rd. Inglewood, Maine 98380
          </p>
        </div>
      </div>
    </li>
  );
};
