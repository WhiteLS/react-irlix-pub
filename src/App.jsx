import React from 'react';
import { Route } from 'react-router-dom';

import { Home, DetailedCard, Favorites } from './pages/';

function App() {
  return (
    <div className="wrapper">
      <Route path="/" component={Home} exact />
      <Route path="/detail" component={DetailedCard} exact />
      <Route path="/favorites" component={Favorites} exact />
    </div>
  );
}

export default App;
