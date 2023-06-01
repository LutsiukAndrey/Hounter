import classNames from 'classnames';
import { Container } from 'components/Container/Container';
import s from './Partner.module.scss';
import green from '../../img/partner-green.png';
import blue from '../../img/partner-blue.png';
import partner from '../../img/partner1.png';
import fase from '../../img/portret1.png';
import { PartnerItem } from './PartnerItem/PartnerItem';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export const Partner = () => {
  return (
    <section className={s.partner}>
      <Container>
        <div className={s.partner__position}>
          <img className={s.partner__img} src={blue} alt="blue" />
          <img
            className={classNames(s.partner__img, s.partner__img_green)}
            src={green}
            alt="green"
          />
          <div className={s.partner__content}>
            <p className={s.partner__text}>
              See tips and trick from our partnership
            </p>
            <h2 className={s.partner__title}>
              Find out more about selling and buying homes
            </h2>
            <button className={s.partner__btn} type="button">
              More Artikels
            </button>
          </div>

          <div className={s.partner__flex}>
            <div className={s.partnerLeftblock}>
              <ul className={s.partnerList}>
                <PartnerItem />
                <PartnerItem />

                <PartnerItem />
              </ul>
            </div>

            <div className={s.partnerRightblock}>
              <img
                className={s.partnerRightblock__imgFirst}
                src={partner}
                alt="png"
              />

              <div className={s.partnerRightblock__name}>
                <img
                  className={s.partnerRightblock__img}
                  src={fase}
                  alt="png"
                />
                <p className={s.partnerRightblock__text}>Cameron Williamson</p>
              </div>
              <h3 className={s.partnerRightblock__title}>
                12 Things to know before buying a house
              </h3>
              <p className={s.partnerRightblock__underText}>
                Want to buy a house but are unsure about what we should know,
                here I will try to explain what we should know and check when we
                want to buy a house
              </p>
              <div className={s.partnerRightblock__timeBlock}>
                <AccessTimeIcon
                  className={s.partnerRightblock__svg}
                  width="24"
                  height="24"
                />

                <p className={s.partnerRightblock__timeText}>
                  8 min read | 25 Apr 2021
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
