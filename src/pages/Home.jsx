import React from 'react';
import { Card } from '../components/';

function Home() {
  return (
    <div className="content__box">
      <Card favorited={true} />
      <Card favorited={false} />
      <Card favorited={false} />
      <Card favorited={false} />
      <Card favorited={false} />
      <Card favorited={false} />
      <Card favorited={false} />
      <Card favorited={false} />
      <Card favorited={false} />
      <Card favorited={false} />
    </div>
  );
}

export default Home;
