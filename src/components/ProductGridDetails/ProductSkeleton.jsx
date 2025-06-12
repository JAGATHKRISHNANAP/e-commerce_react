import React from 'react';

const ProductSkeleton = () => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    padding: '20px 0'
  }}>
    {[...Array(8)].map((_, index) => (
      <div key={index} style={{
        background: 'white',
        borderRadius: '12px',
        padding: '16px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        animation: 'pulse 1.5s ease-in-out infinite alternate'
      }}>
        <div style={{
          width: '100%',
          height: '200px',
          backgroundColor: '#f0f0f0',
          borderRadius: '8px',
          marginBottom: '12px'
        }} />
        <div style={{
          height: '20px',
          backgroundColor: '#f0f0f0',
          borderRadius: '4px',
          marginBottom: '8px'
        }} />
        <div style={{
          height: '16px',
          backgroundColor: '#f0f0f0',
          borderRadius: '4px',
          width: '60%'
        }} />
      </div>
    ))}
  </div>
);

export default ProductSkeleton;
