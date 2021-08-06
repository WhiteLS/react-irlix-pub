import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Card, CardEmpty, CardLoading, Footer, Header } from '../components/';
import { fetchCocktails } from '../redux/action';

function Home() {
  const dispatch = useDispatch();
  const cards = useSelector(({ items }) => items);
  const isLoaded = useSelector(({ isLoaded }) => isLoaded);

  useEffect(() => {
    dispatch(fetchCocktails());
  }, []);

  return (
    <div className="content">
      <Header />
      <div className="content__box">
        <div className="notification">Добавлено в избранное</div>
        {isLoaded ? (
          cards.length ? (
            cards.map((item) => {
              return <Card to="/det" key={item.id} cocktail={item} />;
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
        {/* {cards.length ? (
          cards.map((item) => {
            return <Card to="/det" key={item.id} cocktail={item} />;
          })
        ) : (
          <CardEmpty />
        )} */}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
