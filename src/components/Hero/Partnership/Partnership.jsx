import React from 'react';
import './Partnership.scss';

import treveloca from '../../../img/partner1.svg';
import tiket from '../../../img/partner2.svg';
import airbnb from '../../../img/partner3.svg';
import tripAbvisor from '../../../img/partner4.svg';

export const Partnership = () => {
  const partners = [
    { href: 'https://www.traveloka.com/en-en/', img: treveloca },
    { href: 'https://tickets.ua/', img: tiket },
    { href: 'https://www.airbnb.com.ua/', img: airbnb },
    {
      href: 'https://www.tripadvisorsupport.com/en-US/hc/traveler',
      img: tripAbvisor,
    },
  ];

  return (
    <ul className="partner">
      {partners.map(({ href, img }) => (
        <li className="partner__item">
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="partner__link"
          >
            <img src={img} className="partner__img" alt="partner" />
          </a>
        </li>
      ))}

      {/* <li className={s.hero_partner__item}>
        <a
          href="https://tickets.ua/"
          target="_blank"
          rel="noreferrer"
          className={s.hero_partner__link}
        >
          <img src={tiket} className={s.hero_partner__img} alt="partner" />
        </a>
      </li>
      <li className={s.hero_partner__item}>
        <a
          href="https://www.airbnb.com.ua/"
          target="_blank"
          rel="noreferrer"
          className={s.hero_partner__link}
        >
          <img src={airbnb} className={s.hero_partner__img} alt="partner" />
        </a>
      </li>
      <li className={s.hero_partner__item}>
        <a
          href="
          target="_blank"
          rel="noreferrer"
          className={s.hero_partner__link}
        >
          <img
            src={tripAbvisor}
            className={s.hero_partner__img}
            alt="partner"
          />
        </a>
      </li> */}
    </ul>
  );
};
