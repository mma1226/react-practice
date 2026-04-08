import ProductCard from './ProductCard';
import './ProductGrid.css';

const layout = [
  { ids: [1], columns: 1 },
  { ids: [2, 3, 4], columns: 3 },
  { ids: [5, 6, 7], columns: 3 },
  { ids: [8], columns: 1 },
  { ids: [9, 10], columns: 2 },
  { ids: [11, 12, 13], columns: 3 },
  { ids: [14, 15], columns: 2 },
  { ids: [16, 17], columns: 2 },
  { ids: [18, 19, 20], columns: 3 },
  { ids: [21, 22], columns: 2 },
  { ids: [23, 24, 25], columns: 3 },
  { ids: [26, 27, 28], columns: 3 },
  { ids: [29, 30, 31], columns: 3 },
  { ids: [32, 33, 34], columns: 3 },
  { ids: [35, 36, 37], columns: 3 },
];

function ProductGrid({ products }) {
  return (
    <section className="product-grid">
      <div className="product-grid__inner">
        {layout.map((row, i) => {
          const rowProducts = row.ids.map(id => products.find(p => p.id === id)).filter(Boolean);
          return (
            <div key={i} className={`product-grid__row product-grid__row--${row.columns}col`}>
              {rowProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ProductGrid;
