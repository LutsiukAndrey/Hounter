import s from './RecomendationFilter.module.scss';

import HomeIcon from '@mui/icons-material/Home';
import VillaIcon from '@mui/icons-material/Villa';
import ApartmentIcon from '@mui/icons-material/Apartment';

export const RecomendationFilter = ({ filtered }) => {
  const onFilterChange = event => {
    filtered(event.target.id);
  };
  return (
    <ul className={s.recommendationBtnsList} onClick={onFilterChange}>
      <li className={s.recommendationBtnsList__item}>
        <button className={s.filterBtn}>
          <span className={s.filterBtn__span} id="all">
            <HomeIcon className={s.filterBtn__svg} />
            All
          </span>
        </button>
      </li>
      <li className={s.recommendationBtnsList__item}>
        <button className={s.filterBtn}>
          <span className={s.filterBtn__span} id="house">
            <HomeIcon className={s.filterBtn__svg} />
            House
          </span>
        </button>
      </li>
      <li className={s.recommendationBtnsList__item}>
        <button className={s.filterBtn}>
          <span className={s.filterBtn__span} id="villa">
            <VillaIcon className={s.filterBtn__svg} />
            Villa
          </span>
        </button>
      </li>
      <li className={s.recommendationBtnsList__item}>
        <button className={s.filterBtn}>
          <span className={s.filterBtn__span} id="apartment">
            <ApartmentIcon className={s.filterBtn__svg} />
            Apartment
          </span>
        </button>
      </li>
    </ul>
  );
};
