import s from './RecomendationFilter.module.scss';

import HomeIcon from '@mui/icons-material/Home';
import VillaIcon from '@mui/icons-material/Villa';
import ApartmentIcon from '@mui/icons-material/Apartment';

export const RecomendationFilter = () => {
  return (
    <ul className={s.recommendationBtnsList}>
      <li className={s.recommendationBtnsList__item}>
        <button className={s.filterBtn}>
          <span className={s.filterBtn__span}>
            <HomeIcon className={s.filterBtn__svg} />
            House
          </span>
        </button>
      </li>
      <li className={s.recommendationBtnsList__item}>
        <button className={s.filterBtn}>
          <span className={s.filterBtn__span}>
            <VillaIcon className={s.filterBtn__svg} />
            Villa
          </span>
        </button>
      </li>
      <li className={s.recommendationBtnsList__item}>
        <button className={s.filterBtn}>
          <span className={s.filterBtn__span}>
            <ApartmentIcon className={s.filterBtn__svg} />
            Apartment
          </span>
        </button>
      </li>
    </ul>
  );
};
