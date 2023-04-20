import s from './ReviewsItem.module.scss';
import house from '../../../img/review3.png';
import face from '../../../img/portret2.png';
import StarIcon from '@mui/icons-material/Star';

export const ReviewsItem = () => {
  return (
    <li className={s.reviewList__item}>
      <img src={house} className={s.reviewList__img} alt="img" />
      <div className={s.reviewContent}>
        <h3 className={s.reviewContent__title}>
          Best! I got the house I wanted through Hounter
        </h3>
        <p className={s.reviewContent__text}>
          Through this website I can get a house with the type and
          specifications I want very easily, without a complicated process to be
          able to find information on the house we want.
        </p>
        <div className={s.reviewUnderContent}>
          <img src={face} className={s.reviewUnderContent__img} alt="portret" />
          <div className={s.reviewUnderContent__margin}>
            <h3 className={s.reviewUnderContent__title}>Dianne Russell</h3>
            <p className={s.reviewUnderContent__text}>Manager Director</p>
          </div>
          <div className={s.reviewUnderContent__flex}>
            <StarIcon
              className={s.reviewUnderContent__svg}
              width="28"
              height="28"
            />

            <span className={s.reviewUnderContent__span}>4.6</span>
          </div>
        </div>
      </div>
    </li>
  );
};
