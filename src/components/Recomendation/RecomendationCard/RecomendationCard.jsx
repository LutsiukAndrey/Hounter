import s from './RecomendationCard.module.scss';
import houseImg from '../../../img/recommen-house4.jpg';
import classNames from 'classnames';
import portret from '../../../img/portret1.png';
import { HouseType } from './HouseType/HouseType';

export const RecomendationCard = ({ data }) => {
  const { agent, house, type } = data;

  return (
    <li className={classNames(s.recommendationItem__item, s.animation_left)}>
      <div className={s.recommendationItem__content}>
        <img src={houseImg} className={s.recommendationItem__img} alt="img" />
        <HouseType type={house.type} />
      </div>
      <div className={s.recommendationItem__firstContent}>
        <h2 className={s.recommendationItem__title}>{house.name}</h2>
        <p className={s.recommendationItem__price}>{house.price}</p>
      </div>
      <div className={s.recommendationItem__secondContent}>
        <img
          src={agent.photo}
          className={s.recommendationItem__agent}
          alt="img"
        />
        <div>
          <h3 className={s.recommendationItem__underTitle}>{agent.name}</h3>
          <p className={s.recommendationItem__underText}>{agent.address}</p>
        </div>
      </div>
    </li>
  );
};
