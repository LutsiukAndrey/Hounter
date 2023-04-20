import { useRef } from 'react';

import Slider from 'react-slick';

import s from './Recomendation.module.scss';

import { sliderSettings } from 'helers';

import { RecomendationCard } from './RecomendationCard/RecomendationCard';
import { Container } from 'components/Container/Container';
import { RecomendationFilter } from './RecomendationFilter/RecomendationFilter';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export const Recomendation = () => {
  let slider = useRef(null);

  console.log(slider);

  const next = () => {
    slider.slickNext();
  };

  const previous = () => {
    slider.slickPrev();
  };

  return (
    <section className={s.recommendation}>
      <Container>
        <p className={s.recommendation__text}>Our Recommendation</p>

        <div className={s.recommendation__flex}>
          <h2 className={s.recommendation__title}>Featured House</h2>

          <div className={s.recommendationBtns}>
            <RecomendationFilter />
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
          {/* <ul className={s.recommendationList}> */}
          <Slider
            ref={c => (slider = c)}
            {...sliderSettings}
            className={s.recommendationList}
          >
            <RecomendationCard />
            <RecomendationCard />
            <RecomendationCard />
            <RecomendationCard />
            <RecomendationCard />
          </Slider>
          {/* </ul> */}
        </div>
      </Container>
    </section>
  );
};
