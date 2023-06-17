import s from './Contacts.module.scss';
export const Contacts = () => {
  return (
    <li className={s.contacts}>
      <p className={s.contacts__text}>Contact</p>
      <ul className={s.contactsList}>
        <li className={s.contactsList__item}>
          <a className={s.contactsList__link} href="/">
            2464 Royal Ln. Mesa, New Jersey 45463
          </a>
        </li>
        <li className={s.contactsList__item}>
          <a className={s.contactsList__link} href="tel:6715550110">
            (671) 555-0110
          </a>
        </li>
        <li className={s.contactsList__item}>
          <a className={s.contactsList__link} href="mailto:info@hounter.com">
            info@hounter.com
          </a>
        </li>
      </ul>
    </li>
  );
};
