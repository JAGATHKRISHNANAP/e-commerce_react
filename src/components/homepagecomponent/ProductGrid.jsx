import React from 'react'
import ProductCard from './ProductCard'
import LoadingSpinner from '../ui/LoadingSpinner'

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
  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '400px',
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)'
      }}>
        <div style={{ textAlign: 'center' }}>
          <LoadingSpinner size="large" />
          <p style={{
            marginTop: '16px',
            fontSize: '16px',
            color: '#666'
          }}>
            Loading products...
          </p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '40px',
        textAlign: 'center',
        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
        border: '1px solid #fee'
      }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>❌</div>
        <h3 style={{
          fontSize: '20px',
          color: '#dc3545',
          margin: '0 0 8px 0'
        }}>
          Error Loading Products
        </h3>
        <p style={{
          fontSize: '16px',
          color: '#666',
          margin: '0'
        }}>
          {error}
        </p>
        <button
          onClick={() => window.location.reload()}
          style={{
            marginTop: '16px',
            padding: '10px 20px',
            background: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          Try Again
        </button>
      </div>
    )
  }

  if (!products || products.length === 0) {
    return (
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '40px',
        textAlign: 'center',
        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)'
      }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
        <h3 style={{
          fontSize: '20px',
          color: '#333',
          margin: '0 0 8px 0'
        }}>
          No Products Found
        </h3>
        <p style={{
          fontSize: '16px',
          color: '#666',
          margin: '0'
        }}>
          Try adjusting your search or filter criteria.
        </p>
      </div>
    )
  }

  return (
    <div>
      {/* Results Header */}
      <div style={{
        background: 'white',
        padding: '16px 20px',
        borderRadius: '12px',
        marginBottom: '20px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <div>
          <h2 style={{
            fontSize: '20px',
            fontWeight: '600',
            color: '#333',
            margin: '0 0 4px 0'
          }}>
            Products ({totalCount.toLocaleString()})
          </h2>
          <p style={{
            fontSize: '14px',
            color: '#666',
            margin: '0'
          }}>
            Showing {((currentPage - 1) * 20) + 1}-{Math.min(currentPage * 20, totalCount)} of {totalCount} results
          </p>
        </div>
        
        {totalPages > 1 && (
          <div style={{
            fontSize: '14px',
            color: '#666'
          }}>
            Page {currentPage} of {totalPages}
          </div>
        )}
      </div>

      {/* Product Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '20px',
        marginBottom: '24px'
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

      {/* Pagination */}
      {totalPages > 1 && (
        <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          flexWrap: 'wrap'
        }}>
          {/* Previous Button */}
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage <= 1}
            style={{
              padding: '8px 12px',
              background: currentPage <= 1 ? '#f8f9fa' : '#007bff',
              color: currentPage <= 1 ? '#6c757d' : 'white',
              border: '1px solid #dee2e6',
              borderRadius: '6px',
              cursor: currentPage <= 1 ? 'not-allowed' : 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            ← Previous
          </button>

          {/* Page Numbers */}
          {(() => {
            const pages = []
            const startPage = Math.max(1, currentPage - 2)
            const endPage = Math.min(totalPages, currentPage + 2)

            // First page
            if (startPage > 1) {
              pages.push(
                <button
                  key={1}
                  onClick={() => onPageChange(1)}
                  style={{
                    padding: '8px 12px',
                    background: 'white',
                    color: '#007bff',
                    border: '1px solid #dee2e6',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}
                >
                  1
                </button>
              )
              
              if (startPage > 2) {
                pages.push(
                  <span key="ellipsis1" style={{ 
                    padding: '8px 4px', 
                    color: '#6c757d' 
                  }}>
                    ...
                  </span>
                )
              }
            }

            // Current range
            for (let i = startPage; i <= endPage; i++) {
              pages.push(
                <button
                  key={i}
                  onClick={() => onPageChange(i)}
                  style={{
                    padding: '8px 12px',
                    background: i === currentPage ? '#007bff' : 'white',
                    color: i === currentPage ? 'white' : '#007bff',
                    border: '1px solid #dee2e6',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: i === currentPage ? '600' : '500'
                  }}
                >
                  {i}
                </button>
              )
            }

            // Last page
            if (endPage < totalPages) {
              if (endPage < totalPages - 1) {
                pages.push(
                  <span key="ellipsis2" style={{ 
                    padding: '8px 4px', 
                    color: '#6c757d' 
                  }}>
                    ...
                  </span>
                )
              }
              
              pages.push(
                <button
                  key={totalPages}
                  onClick={() => onPageChange(totalPages)}
                  style={{
                    padding: '8px 12px',
                    background: 'white',
                    color: '#007bff',
                    border: '1px solid #dee2e6',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}
                >
                  {totalPages}
                </button>
              )
            }

            return pages
          })()}

          {/* Next Button */}
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage >= totalPages}
            style={{
              padding: '8px 12px',
              background: currentPage >= totalPages ? '#f8f9fa' : '#007bff',
              color: currentPage >= totalPages ? '#6c757d' : 'white',
              border: '1px solid #dee2e6',
              borderRadius: '6px',
              cursor: currentPage >= totalPages ? 'not-allowed' : 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            Next →
          </button>
        </div>
      )}
    </div>
  )
}

export default ProductGrid