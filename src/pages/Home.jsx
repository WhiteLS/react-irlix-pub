import React, { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Card, CardEmpty, CardLoading, Footer, Header, Notification } from '../components/';
import { fetchCocktails } from '../redux/action';

function Home() {
  const dispatch = useDispatch();
  const cards = useSelector(({ items }) => items);
  const isLoaded = useSelector(({ isLoaded }) => isLoaded);
  const [value, setValue] = useState('');
  const [ntf, setNtf] = useState(false);

  useEffect(() => {
    dispatch(fetchCocktails());
  }, []);

  const handleChangeInput = (e) => {
    setValue(e.target.value);
  };

  const toggleNotification = () => {
    setNtf(true);

    setTimeout(() => {
      setNtf(false);
    }, 1500);
  };

  // const filteredCocktails = useMemo(() => {
  //   return cards.filter((cocktail) => {
  //     return cocktail.name.toLowerCase().includes(value.toLocaleLowerCase());
  //   });
  // });
  const filteredCocktails = cards.filter((cocktail) => {
    return cocktail.name.toLowerCase().includes(value.toLocaleLowerCase());
  });

  return (
    <div className="content">
      <Header>Главная</Header>
      <div
        className={
          'content-box' + (filteredCocktails.length % 4 === 0 ? ' content-box_justify' : '')
        }>
        <Notification ntf={ntf} />
        {isLoaded ? (
          filteredCocktails.length ? (
            filteredCocktails.map((item) => {
              return <Card key={item.id} cocktail={item} toggleNotification={toggleNotification} />;
            })
          ) : (
            <CardEmpty />
          )
        ) : (
          Array(4)
            .fill(null)
            .map((_, i) => {
              return <CardLoading key={i} />;
            })
        )}
      </div>
      <Footer
        searchValue={value}
        onChange={handleChangeInput}
        buttonLink="/favorites"
        buttonValue="Избранные"
      />
    </div>
  );
}

export default Home;
