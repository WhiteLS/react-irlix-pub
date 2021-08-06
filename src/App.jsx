import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

import { Home, DetailedCard, Favorites } from './pages/';
// import { fetchCocktails } from './redux/action';

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchCocktails());
  // }, []);

  return (
    <div className="wrapper">
      {/* <div className="content"> */}
      {/* <Home /> */}
      {/* <DetailedCard /> */}
      {/* </div> */}
      <Route path="/" component={Home} exact />
      <Route path="/detail" component={DetailedCard} exact />
      <Route path="/favorites" component={Favorites} exact />
    </div>
  );
}

export default App;
