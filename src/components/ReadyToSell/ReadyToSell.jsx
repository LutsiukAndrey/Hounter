import classNames from 'classnames';
import s from './ReadyToSell.module.scss';
import face from '../../img/portret1.png';
import room from '../../img/sell-rightblock4.jpg';
import main from '../../img/sell-rightblock3.jpg';
import vase from '../../img/sell-rightblock2.jpg';
import sofa from '../../img/sell-rightblock1.jpg';
import orange from '../../img/sell-orange.png';
import { Container } from 'components/Container/Container';
import yellow from '../../img/sell-yellow.png';
import PhoneIcon from '@mui/icons-material/Phone';
import GarageIcon from '@mui/icons-material/Garage';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import StairsIcon from '@mui/icons-material/Stairs';
export const ReadyToSell = () => {
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

                <p className={s.sellLeftblockList__text}>4 Bedrooms</p>
              </li>
              <li className={s.sellLeftblockList__item}>
                <BathtubIcon
                  className={s.sellLeftblockList__svg}
                  width="32"
                  height="32"
                />

                <p className={s.sellLeftblockList__text}>2 Bathrooms</p>
              </li>
              <li className={s.sellLeftblockList__item}>
                <GarageIcon
                  className={s.sellLeftblockList__svg}
                  width="32"
                  height="32"
                />
                <p className={s.sellLeftblockList__text}>1 Carport</p>
              </li>
              <li className={s.sellLeftblockList__item}>
                <StairsIcon
                  className={s.sellLeftblockList__svg}
                  width="32"
                  height="32"
                />

                <p className={s.sellLeftblockList__text}>2 Floors</p>
              </li>
            </ul>

            <span className={s.sellLeftblock__span}></span>

            <div className={s.sellLeftblockDown}>
              <div className={s.sellLeftblockDown__block}>
                <img
                  src={face}
                  className={s.sellLeftblockDown__img}
                  alt="img"
                />
                <div>
                  <h3 className={s.sellLeftblockDown__title}>Dianne Russell</h3>
                  <p className={s.sellLeftblockDown__text}>Manager Director</p>
                </div>
              </div>
              <button className={s.sellLeftblockDown__btn} type="button">
                <PhoneIcon
                  width="24"
                  height="24"
                  className={s.sellLeftblockDown__svg}
                />
                Contact Now
              </button>
            </div>
          </div>

          <div className={classNames(s.sellRightblock, s.animationLeft)}>
            <img
              src={sofa}
              className={classNames(
                s.sellRightblock__img,
                s.sellRightblock__img_bed
              )}
              alt="img"
            />

            <img
              src={vase}
              className={classNames(
                s.sellRightblock__img,
                s.sellRightblock__img_vase
              )}
              alt="img"
            />

            <video
              poster={main}
              className={classNames(
                s.sellRightblock__img,
                s.sellRightblock__img_main
              )}
              alt="img"
            />

            <img
              src={room}
              className={classNames(
                s.sellRightblock__img,
                s.sellRightblock__img_room
              )}
              alt="img"
            />

            {/* <a className={s.sellRightblock__link} href="#">
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
