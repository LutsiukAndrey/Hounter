import { Header } from './components/Header/Header';
import { Hero } from 'components/Hero/Hero';
import { Recomendation } from 'components/Recomendation/Recomendation';
import { ReadyToSell } from 'components/ReadyToSell/ReadyToSell';
import { Reviews } from 'components/Reviews/Reviews';
import { Partner } from 'components/Partner/Partner';
import { Subscribe } from 'components/Subscribe/Subscribe';
import { Footer } from 'components/Footer/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from 'js/API';

export const App = () => {
  const [housesArr, setHousesArr] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isReadyToSellArr, setIsReadyToSellArr] = useState([]);

  useEffect(() => {
    const getHouses = async () => {
      const { data } = await axios.get(baseUrl);
      setHousesArr(data);
      setIsReadyToSellArr(data.filter(house => house.readyToSell));
      setIsLoading(false);
    };
    getHouses();
  }, []);

  return (
    <>
      <Header />
      <Hero />

      {isLoading ? <></> : <Recomendation data={housesArr} />}
      {isLoading ? <></> : <ReadyToSell data={isReadyToSellArr} />}
      {isLoading ? <></> : <Reviews data={housesArr} />}
      <Partner />
      <Subscribe />
      <Footer />
    </>
  );
};
