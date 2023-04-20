import classNames from 'classnames';
import s from './PartnerItem.module.scss';
import partner from '../../../img/partner1.png';
import fase from '../../../img/portret1.png';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export const PartnerItem = () => {
  return (
    <li className={classNames(s.partnerList__item, s.animationLeft)}>
      <div className={s.partnerContent}>
        <img
          className={s.partnerContent__imgFirst}
          src={partner}
          alt="partner"
        />

        <div className={s.partnerContent__flex}>
          <div className={s.partnerContent__flexName}>
            <img className={s.partnerContent__img} src={fase} alt="png" />
            <p className={s.partnerContent__text}>Dianne Russell</p>
          </div>
          <h3 className={s.partnerContent__title}>
            The things we need to check when we want to buy a house
          </h3>
          <div className={s.partnerContent__time}>
            <AccessTimeIcon
              className={s.partnerContent__svg}
              width="24"
              height="24"
            />

            <p className={s.partnerContent__textTime}>
              4 min read | 25 Apr 2021
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};
