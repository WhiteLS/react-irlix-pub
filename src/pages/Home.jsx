import React, { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Card, CardEmpty, CardLoading, Footer, Header } from '../components/';
import { fetchCocktails } from '../redux/action';

function Home() {
  const dispatch = useDispatch();
  const cards = useSelector(({ items }) => items);
  const isLoaded = useSelector(({ isLoaded }) => isLoaded);
  const [value, setValue] = useState('');

  useEffect(() => {
    dispatch(fetchCocktails());
  }, []);

  const handleChangeInput = (e) => {
    setValue(e.target.value);
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
          'content__box ' + (filteredCocktails.length >= 4 ? 'content__box--justify' : '')
        }>
        <div className="notification">Добавлено в избранное</div>
        {isLoaded ? (
          filteredCocktails.length ? (
            filteredCocktails.map((item) => {
              return <Card key={item.id} cocktail={item} />;
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
