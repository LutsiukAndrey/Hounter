import { Container } from 'components/Container/Container';
import { Header } from './components/Header/Header';
import { Hero } from 'components/Hero/Hero';
import { Recomendation } from 'components/Recomendation/Recomendation';
import { ReadyToSell } from 'components/ReadyToSell/ReadyToSell';

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Recomendation />
      <ReadyToSell />
    </>
  );
};
