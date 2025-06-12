import React from 'react';

const ProductError = ({ error }) => (
  <div style={{
    textAlign: 'center',
    padding: '40px',
    background: '#fff3cd',
    border: '1px solid #ffeaa7',
    borderRadius: '8px',
    color: '#856404'
  }}>
    <div style={{ fontSize: '48px', marginBottom: '16px' }}>⚠️</div>
    <h3>Unable to load products</h3>
    <p style={{ opacity: 0.8 }}>{error}</p>
  </div>
);

export default ProductError;
