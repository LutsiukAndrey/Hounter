import s from './RecomendationFilter.module.scss';

import HomeIcon from '@mui/icons-material/Home';
import VillaIcon from '@mui/icons-material/Villa';
import ApartmentIcon from '@mui/icons-material/Apartment';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';

import {
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
// import { RecomendationBurger } from './RecomendationBurger/RecomendationBurger';
import { useState } from 'react';

export const RecomendationFilter = ({ filtered }) => {
  const mobile = useMediaQuery('(max-width:765px)');

  const onFilterChange = event => {
    filtered(event.target.id);
  };

  const filterOptions = [
    { id: 'all', label: 'All', Icon: HomeIcon },
    { id: 'house', label: 'House', Icon: HomeIcon },
    { id: 'villa', label: 'Villa', Icon: VillaIcon },
    { id: 'apartment', label: 'Apartment', Icon: ApartmentIcon },
  ];

  const [open, setOpen] = useState(true);

  return (
    <ul className={s.recommendationBtnsList} onClick={onFilterChange}>
      {(mobile && (
        <List component="button" sx={{ border: 'none' }}>
          <button className={s.filterBtn} onClick={() => setOpen(!open)}>
            <span className={s.filterBtn__span}>
              <HomeIcon className={s.filterBtn__svg} />
              dsgsdfg
            </span>
          </button>
          <Collapse
            // className="burger_collapse"
            sx={{ position: 'absolute', zIndex: 4 }}
            in={open}
            timeout="auto"
            unmountOnExit
          >
            <List component="ul">
              {filterOptions.map(option => (
                <li key={option.id} className={s.recommendationBtnsList__item}>
                  <button className={s.filterBtn}>
                    <span className={s.filterBtn__span} id={option.id}>
                      <option.Icon className={s.filterBtn__svg} />
                      {option.label}
                    </span>
                  </button>
                </li>
              ))}
            </List>
          </Collapse>
        </List>
      )) ||
        filterOptions.map(option => (
          <li key={option.id} className={s.recommendationBtnsList__item}>
            <button className={s.filterBtn}>
              <span className={s.filterBtn__span} id={option.id}>
                <option.Icon className={s.filterBtn__svg} />
                {option.label}
              </span>
            </button>
          </li>
        ))}
    </ul>
  );
};
