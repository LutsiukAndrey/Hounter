import classNames from 'classnames';
import s from './ReadyToSell.module.scss';
import orange from '../../img/sell-orange.png';
import { Container } from 'components/Container/Container';
import yellow from '../../img/sell-yellow.png';
import PhoneIcon from '@mui/icons-material/Phone';
import GarageIcon from '@mui/icons-material/Garage';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import StairsIcon from '@mui/icons-material/Stairs';

export const ReadyToSell = ({ data }) => {
  const { agent, house } = data[0];
  const normolizeTel = tel => {
    return Number(tel.trim().replace(/[^+\d]/g, ''));
  };
  return (
    <section className={s.sell}>
      <Container>
        <div className={s.sell__position}>
          <div className={classNames(s.sellLeftblock, s.animationLeft)}>
            <p className={s.sell__gold}>Ready to Sell!</p>
            <h2 className={s.sellLeftblock__title}>
              Let’s tour and see our house!
            </h2>
            <p className={s.sellLeftblock__underText}>
              Houses recommended by our partners that have been curated to
              become the home of your dreams!
            </p>
            <p className={s.sellLeftblock__detailText}>House Detail</p>

            <ul className={s.sellLeftblockList}>
              <li className={s.sellLeftblockList__item}>
                <BedIcon
                  className={s.sellLeftblockList__svg}
                  width="32"
                  height="32"
                />

                <p className={s.sellLeftblockList__text}>
                  {house.description.bedrooms} Bedrooms
                </p>
              </li>
              <li className={s.sellLeftblockList__item}>
                <BathtubIcon
                  className={s.sellLeftblockList__svg}
                  width="32"
                  height="32"
                />

                <p className={s.sellLeftblockList__text}>
                  {house.description.bathrooms} Bathrooms
                </p>
              </li>
              <li className={s.sellLeftblockList__item}>
                <GarageIcon
                  className={s.sellLeftblockList__svg}
                  width="32"
                  height="32"
                />
                <p className={s.sellLeftblockList__text}>
                  {house.description.carport} Carport
                </p>
              </li>
              <li className={s.sellLeftblockList__item}>
                <StairsIcon
                  className={s.sellLeftblockList__svg}
                  width="32"
                  height="32"
                />

                <p className={s.sellLeftblockList__text}>
                  {house.description.floor} Floors
                </p>
              </li>
            </ul>

            <span className={s.sellLeftblock__span}></span>

            <div className={s.sellLeftblockDown}>
              <div className={s.sellLeftblockDown__block}>
                <img
                  src={agent.photo}
                  className={s.sellLeftblockDown__img}
                  alt="img"
                />
                <div>
                  <h3 className={s.sellLeftblockDown__title}>{agent.name}</h3>
                  <p className={s.sellLeftblockDown__text}>{agent.jobTitle}</p>
                </div>
              </div>
              <a
                className={s.sellLeftblockDown__btn}
                type="tel"
                href={`tel:${normolizeTel(agent.tel)}`}
              >
                <PhoneIcon
                  width="24"
                  height="24"
                  className={s.sellLeftblockDown__svg}
                />
                Contact Now
              </a>
            </div>
          </div>

          <div className={classNames(s.sellRightblock, s.animationLeft)}>
            <img
              src={house.images[1]}
              className={classNames(
                s.sellRightblock__img,
                s.sellRightblock__img_bed
              )}
              alt="img"
            />

            <img
              src={house.images[2]}
              className={classNames(
                s.sellRightblock__img,
                s.sellRightblock__img_vase
              )}
              alt="img"
            />

            <img
              src={house.images[0]}
              className={classNames(
                s.sellRightblock__img,
                s.sellRightblock__img_main
              )}
              alt="img"
            />

            <img
              src={house.images[3]}
              className={classNames(
                s.sellRightblock__img,
                s.sellRightblock__img_room
              )}
              alt="img"
            />

            {/* <a className={s.sellRightblock__link} href="/">
              <svg className={s.sellRightblock__svg} width="20" height="20">
                <use href="./img/sprite/sprite.svg#icon-sell-play"></use>
              </svg>
            </a> */}
          </div>

          <img
            src={orange}
            className={classNames(s.sell__img, s.sell__img_orange)}
            alt="orange"
          />
          <img
            src={yellow}
            className={classNames(s.sell__img, s.sell__img_yellow)}
            alt="yellow"
          />
        </div>
      </Container>
    </section>
  );
};
