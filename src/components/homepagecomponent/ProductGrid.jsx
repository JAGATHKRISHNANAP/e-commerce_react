// src/components/homepagecomponent/ProductGrid.jsx
import React from 'react';
import ProductCard from '../ProductGridDetails/ProductCard';
import ProductSkeleton from '../ProductGridDetails/ProductSkeleton';
import ProductError from '../ProductGridDetails/ProductError';
import ProductEmpty from '../ProductGridDetails/ProductEmpty';
import PaginationControls from '../ProductGridDetails/PaginationControls';

const ProductGrid = ({
  products,
  loading,
  error,
  onAddToCart,
  onViewDetails,
  totalCount,
  currentPage,
  totalPages,
  onPageChange
}) => {
  if (loading) return <ProductSkeleton />;
  if (error) return <ProductError error={error} />;
  if (!products || products.length === 0) return <ProductEmpty />;

  return (
    <div>
      <div className="products-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '24px',
        padding: '20px 0'
      }}>
        {products.map(product => (
          <ProductCard
            key={product.product_id}
            product={product}
            onAddToCart={onAddToCart}
            onViewDetails={onViewDetails}
          />
        ))}
      </div>

      <PaginationControls
        totalCount={totalCount}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />

      <div style={{
        textAlign: 'center',
        color: '#666',
        fontSize: '14px',
        marginTop: '16px'
      }}>
        Showing {((currentPage - 1) * 20) + 1} to {Math.min(currentPage * 20, totalCount)} of {totalCount} products
      </div>
    </div>
  );
};

export default ProductGrid;
