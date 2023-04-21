import { useRef, useState } from 'react';

import Slider from 'react-slick';

import s from './Recomendation.module.scss';

import { sliderSettings } from 'js/helpers';

import { RecomendationCard } from './RecomendationCard/RecomendationCard';
import { Container } from 'components/Container/Container';
import { RecomendationFilter } from './RecomendationFilter/RecomendationFilter';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from 'js/API';

export const Recomendation = () => {
  const [housesArr, setHousesArr] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filtredHouses, setFiltredHouses] = useState([]);
  useEffect(() => {
    const getHouses = async () => {
      const { data } = await axios.get(baseUrl);
      setHousesArr(data);
      setIsLoading(false);
    };
    getHouses();
  }, []);

  let slider = useRef(null);

  const next = () => {
    slider.slickNext();
  };

  const previous = () => {
    slider.slickPrev();
  };
  console.log(housesArr.filter(e => e.type === 'apartment'));
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
          {isLoading ? (
            <></>
          ) : (
            <Slider
              ref={c => (slider = c)}
              {...sliderSettings}
              className={s.recommendationList}
            >
              {housesArr.map(house => {
                return <RecomendationCard data={house} key={house.id} />;
              })}
            </Slider>
          )}
        </div>
      </Container>
    </section>
  );
};

//house - 7
//villa  3
//apartment - 6
