import React from 'react';

const Rating = ({ rating }) => (
  <div className="relatedRating">
    <div className="shownRating">
      {[...Array(rating.whole)].map((each, i) => <div key={i}><i className="fas fa-star" /></div>)}
      <div><i className="fas fa-star" style={{ width: rating.part, overflow: 'hidden' }} /></div>
    </div>
    <div className="hiddenRating">
      {[...Array(5)].map((each, i) => <i key={i} className="far fa-star" />)}
    </div>
  </div>
);

export default Rating;
