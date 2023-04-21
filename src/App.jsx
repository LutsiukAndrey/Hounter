import { Container } from 'components/Container/Container';
import { Header } from './components/Header/Header';
import { Hero } from 'components/Hero/Hero';
import { Recomendation } from 'components/Recomendation/Recomendation';
import { ReadyToSell } from 'components/ReadyToSell/ReadyToSell';
import { Reviews } from 'components/Reviews/Reviews';
import { Partner } from 'components/Partner/Partner';
import { Subscribe } from 'components/Subscribe/Subscribe';
import { Footer } from 'components/Footer/Footer';
import { PreviousNextMethods } from 'components/Test';

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Recomendation />
      <ReadyToSell />
      <Reviews />
      <Partner />
      <Subscribe />
      <Footer />
    </>
  );
};
