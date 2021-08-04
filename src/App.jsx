import React from 'react';
import { Footer, Header } from './components/';
import DetailedCard from './pages/DetailedCard';
import Home from './pages/Home';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        {/* <Home /> */}
        <DetailedCard />
      </div>
      <Footer />
    </div>
  );
}

export default App;
