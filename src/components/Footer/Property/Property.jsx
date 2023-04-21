import s from './Property.module.scss';
export const Property = () => {
  return (
    <li className={s.property}>
      <p className={s.property__text}>Property</p>
      <ul className={s.propertyList}>
        <li className={s.propertyList__item}>
          <a className={s.propertyList__link} href="#">
            House
          </a>
        </li>
        <li className={s.propertyList__item}>
          <a className={s.propertyList__link} href="#">
            Apartment
          </a>
        </li>
        <li className={s.propertyList__item}>
          <a className={s.propertyList__link} href="#">
            Villa
          </a>
        </li>
      </ul>
    </li>
  );
};
