import React from 'react';

function Description({ product }) {
  return (
    <div>
      <h3>{product.slogan}</h3>
      <p>{product.description}</p>
      <ul>
        {product.features.map((item, index) => (
          <li key={index}>
            {item.feature} : {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Description;
