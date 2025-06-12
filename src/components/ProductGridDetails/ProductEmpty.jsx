import React from 'react';

const ProductEmpty = () => (
  <div style={{
    textAlign: 'center',
    padding: '60px 20px',
    color: '#666'
  }}>
    <div style={{ fontSize: '64px', marginBottom: '16px' }}>📦</div>
    <h3 style={{ color: '#333' }}>No products found</h3>
    <p style={{ opacity: 0.8 }}>Try adjusting your filters or search terms</p>
  </div>
);

export default ProductEmpty;
