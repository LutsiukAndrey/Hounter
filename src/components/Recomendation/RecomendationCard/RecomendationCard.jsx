import s from './RecomendationCard.module.scss';
import house from '../../../img/recommen-house4.jpg';
import classNames from 'classnames';
import portret from '../../../img/portret1.png';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

export const RecomendationCard = () => {
  return (
    <li className={classNames(s.recommendationItem__item, s.animation_left)}>
      <div className={s.recommendationItem__content}>
        <img src={house} className={s.recommendationItem__img} alt="img" />
        <div
          style={{ color: '#EF4444', backgroundColor: '#FEE2E2' }}
          className={classNames(s.recommendationItem_position)}
        >
          <LocalFireDepartmentIcon />
          <p>Popular</p>
        </div>
      </div>
      <div className={s.recommendationItem__firstContent}>
        <h2 className={s.recommendationItem__title}>Cosmo's House</h2>
        <p className={s.recommendationItem__price}>$ 22.000.000</p>
      </div>
      <div className={s.recommendationItem__secondContent}>
        <img
          src={portret}
          className={s.recommendationItem__underImg}
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
