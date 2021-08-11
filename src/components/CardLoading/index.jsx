import React from 'react';
import ContentLoader from 'react-content-loader';

const CardLoading = () => (
  <ContentLoader
    className="card"
    speed={2}
    // width={320}
    // height={420}
    viewBox="0 0 320 420"
    backgroundColor="#c7c7c7"
    foregroundColor="#575757">
    <rect x="33" y="17" rx="24" ry="24" width="94" height="87" />
    <rect x="33" y="352" rx="8" ry="8" width="206" height="21" />
    <rect x="34" y="378" rx="8" ry="8" width="156" height="15" />
    <rect x="0" y="0" rx="0" ry="0" width="2" height="420" />
    <rect x="318" y="0" rx="0" ry="0" width="2" height="420" />
    <rect x="0" y="0" rx="0" ry="0" width="320" height="2" />
    <rect x="0" y="418" rx="0" ry="0" width="320" height="2" />
  </ContentLoader>
);

export default CardLoading;
