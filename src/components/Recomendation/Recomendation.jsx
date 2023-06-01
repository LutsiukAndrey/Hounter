import { useEffect, useRef, useState } from 'react';

import Slider from 'react-slick';

import s from './Recomendation.module.scss';

import { sliderSettings } from 'js/helpers';

import { RecomendationCard } from './RecomendationCard/RecomendationCard';
import { Container } from 'components/Container/Container';
import { RecomendationFilter } from './RecomendationFilter/RecomendationFilter';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { nanoid } from 'nanoid';

export const Recomendation = ({ data }) => {
  let slider = useRef(null);

  const next = () => {
    slider.slickNext();
  };

  const previous = () => {
    slider.slickPrev();
  };
  //
  //
  const [filteredValue, setfilteredValue] = useState('');

  const [filteredHouse, setFilteredHouse] = useState(data);
  useEffect(() => {
    setFilteredHouse(
      filteredValue !== 'all'
        ? data.filter(house => house.type.includes(filteredValue))
        : data
    );
  }, [data, filteredValue]);
  console.log(filteredHouse);

  //
  //
  return (
    <section className={s.recommendation}>
      <Container>
        <p className={s.recommendation__text}>Our Recommendation</p>

        <div className={s.recommendation__flex}>
          <h2 className={s.recommendation__title}>Featured House</h2>

          <div className={s.recommendationBtns}>
            <RecomendationFilter filtered={setfilteredValue} />
            <ul className={s.recommendationListBtn}>
              <li className={s.recommendationListBtn__item}>
                <button
                  className={s.recommendationListBtn__btn}
                  onClick={previous}
                >
                  <ArrowBackIosIcon className={s.recommendationListBtn__svg} />
                </button>
              </li>
              <li className={s.recommendationListBtn__item}>
                <button
                  className={s.recommendationListBtn__btn}
                  type="button"
                  onClick={next}
                >
                  <ArrowForwardIosIcon
                    className={s.recommendationListBtn__svg}
                  />
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <Slider
            ref={c => (slider = c)}
            {...sliderSettings}
            className={s.recommendationList}
          >
            {filteredHouse.map(house => {
              return <RecomendationCard data={house} key={nanoid()} />;
            })}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

//house - 7
//villa  3
//apartment - 6
