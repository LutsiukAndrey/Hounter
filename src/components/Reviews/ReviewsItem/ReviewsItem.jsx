import s from './ReviewsItem.module.scss';
// import house from '../../../img/review3.png';
import StarIcon from '@mui/icons-material/Star';

export const ReviewsItem = ({ data }) => {
  const { agent, house } = data;

  return (
    <li className={s.reviewItem}>
      <img src={house.images[0]} className={s.reviewItem__img} alt="img" />
      <div className={s.reviewContent}>
        <h3 className={s.reviewContent__title}>{house.name}</h3>
        <p className={s.reviewContent__text}>{house.description.text}</p>
        <div className={s.reviewUnderContent}>
          <img
            src={agent.photo}
            className={s.reviewUnderContent__img}
            alt="portret"
          />
          <div className={s.reviewUnderContent__margin}>
            <h3 className={s.reviewUnderContent__title}>{agent.name}</h3>
            <p className={s.reviewUnderContent__text}>{agent.jobTitle}</p>
          </div>
          <div className={s.reviewUnderContent__flex}>
            <StarIcon
              className={s.reviewUnderContent__svg}
              width="28"
              height="28"
            />

            <span className={s.reviewUnderContent__span}>{house.rating}</span>
          </div>
        </div>
      </div>
    </li>
  );
};
