import { Container } from 'components/Container/Container';
import s from './Reviews.module.scss';
import classNames from 'classnames';
import { ReviewsItem } from './ReviewsItem/ReviewsItem';
export const Reviews = () => {
  return (
    <section className={s.review} id="aboutUs">
      <Container>
        <p className={classNames(s.review__text, s.review__gold)}>
          See Our Review
        </p>
        <h2 className={classNames(s.review__title, s.animationTop)}>
          What Our User Say About Us
        </h2>

        <ul className={s.reviewList}>
          <ReviewsItem />
          <ReviewsItem />
          <ReviewsItem />
        </ul>

        <span className={s.review__span}></span>
      </Container>
    </section>
  );
};
