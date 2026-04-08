import { useState } from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  const [zoom, setZoom] = useState(0);

  const scales = [1, 1.5, 2.2, 3];
  const origins = ['center', 'top left', 'bottom right', 'center'];

  const handleClick = (e) => {
    e.preventDefault();
    setZoom((prev) => (prev + 1) % scales.length);
  };

  return (
    <div
      className={`product-card ${product.soldOut ? 'product-card--sold-out' : ''}`}
      onClick={handleClick}
    >
      <div className="product-card__image">
        <img
          src={product.image}
          alt={`${product.name} ${product.color}`}
          loading="lazy"
          style={{
            transform: `scale(${scales[zoom]})`,
            transformOrigin: origins[zoom],
          }}
        />
      </div>
      <div className="product-card__info">
        <p className="product-card__name">
          {product.name} - {product.color}
        </p>
        <p className="product-card__price">
          {product.soldOut ? 'Sold out' : '245.00 GBP'}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
