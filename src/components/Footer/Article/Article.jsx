import s from './Article.module.scss';

export const Article = () => {
  return (
    <li className={s.article}>
      <p className={s.article__text}>Article</p>
      <ul className={s.articleList}>
        <li className={s.articleList__item}>
          <a className={s.articleList__link} href="#">
            New Article
          </a>
        </li>
        <li className={s.articleList__item}>
          <a className={s.articleList__link} href="#">
            Popular Article
          </a>
        </li>
        <li className={s.articleList__item}>
          <a className={s.articleList__link} href="#">
            Most Read
          </a>
        </li>
        <li className={s.articleList__item}>
          <a className={s.articleList__link} href="#">
            Tips & Tricks
          </a>
        </li>
      </ul>
    </li>
  );
};
