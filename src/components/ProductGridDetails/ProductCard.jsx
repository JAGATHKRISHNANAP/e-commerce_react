import React from 'react';
import ProductImage from '../ui/ProductImage';

const ProductCard = ({ product, onAddToCart, onViewDetails }) => {
  const getImage = () => {
    if (product.primary_image) return product.primary_image;
    if (product.images?.length > 0) {
      const primary = product.images.find(img => img.is_primary);
      return primary?.image_url || product.images[0].image_url;
    }
    return product.image_url || null;
  };

  const imageUrl = getImage();

  return (
    <div
      onClick={() => onViewDetails(product)}
      style={{
        background: 'white',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        transition: '0.3s',
        border: '1px solid #e0e0e0',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        cursor: 'pointer'
      }}
    >
      <div style={{ height: '240px', position: 'relative' }}>
        <ProductImage src={imageUrl} alt={product.name} style={{ height: '100%' }} />
        {product.stock_quantity <= 0 && (
          <Badge text="Out of Stock" color="#dc3545" />
        )}
        {product.stock_quantity > 0 && product.stock_quantity <= 5 && (
          <Badge text={`Only ${product.stock_quantity} left`} color="#ffc107" textColor="#333" />
        )}
      </div>

      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <h3 style={{
          fontSize: '18px', fontWeight: '600', margin: '0 0 4px 0',
          display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden'
        }}>{product.name}</h3>

        <p style={{
          fontSize: '14px', color: '#666', margin: '0 0 12px 0',
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
          overflow: 'hidden', minHeight: '3em'
        }}>{product.description || '\u00A0'}</p>

        {product.category && (
          <div style={{
            background: '#e3f2fd', color: '#1976d2', padding: '4px 8px',
            borderRadius: '12px', fontSize: '12px', fontWeight: '500', marginBottom: '12px'
          }}>{product.category.name}</div>
        )}

        <div style={{
          fontSize: '24px', fontWeight: '700', color: '#e74c3c', marginBottom: '16px'
        }}>₹{parseFloat(product.price).toFixed(2)}</div>

        <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
          <button
            onClick={(e) => { e.stopPropagation(); onViewDetails(product); }}
            style={{
              flex: 1, padding: '12px', border: '2px solid #007bff',
              borderRadius: '8px', background: 'transparent',
              color: '#007bff', fontWeight: '600', cursor: 'pointer'
            }}
          >View Details</button>
          <button
            onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
            disabled={product.stock_quantity <= 0}
            style={{
              flex: 1, padding: '12px',
              background: product.stock_quantity <= 0 ? '#ccc' : '#28a745',
              color: 'white', border: 'none', borderRadius: '8px',
              fontWeight: '600', cursor: product.stock_quantity <= 0 ? 'not-allowed' : 'pointer'
            }}
          >{product.stock_quantity <= 0 ? 'Out of Stock' : 'Add to Cart'}</button>
        </div>
      </div>
    </div>
  );
};

const Badge = ({ text, color, textColor = 'white' }) => (
  <div style={{
    position: 'absolute', top: '12px', right: '12px',
    background: color, color: textColor,
    padding: '4px 8px', borderRadius: '12px',
    fontSize: '12px', fontWeight: '600'
  }}>{text}</div>
);

export default ProductCard;
