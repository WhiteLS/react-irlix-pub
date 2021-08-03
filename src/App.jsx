import React from 'react';
import { Categories, Footer, Header } from './components/';
import Home from './pages/Home';

function App() {
  const categoryTypes = ['Новинки', 'Сладкие', 'Хит', 'Крепкие', 'Лонг', 'Шот'];

  return (
    <div className="wrapper">
      <Header />
      <Categories items={categoryTypes} />
      <div className="content">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
