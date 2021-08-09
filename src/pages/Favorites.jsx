import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Header, Footer, Card, CardLoading, CardEmpty } from './../components/';
import { fetchCocktails } from '../redux/action';

function Favorites() {
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

  const filteredFavoriteCocktails = cards.filter((cocktail) => {
    return cocktail.isFavorite && cocktail.name.toLowerCase().includes(value.toLocaleLowerCase());
  });

  return (
    <div className="content">
      <Header>Избранные</Header>
      <div className="content__box">
        {isLoaded ? (
          filteredFavoriteCocktails.length ? (
            filteredFavoriteCocktails.map((item) => {
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
        buttonLink="../react-irlix-pub/"
        buttonValue="Назад"
      />
    </div>
  );
}

export default Favorites;
