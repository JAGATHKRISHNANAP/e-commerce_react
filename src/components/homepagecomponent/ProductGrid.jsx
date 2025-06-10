// import React from 'react'
// import ProductCard from './ProductCard'
// import LoadingSpinner from '../ui/LoadingSpinner'

// const ProductGrid = ({ 
//   products, 
//   loading, 
//   error, 
//   onAddToCart, 
//   onViewDetails,
//   totalCount,
//   currentPage,
//   totalPages,
//   onPageChange
// }) => {
//   if (loading) {
//     return (
//       <div style={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         minHeight: '400px',
//         background: 'white',
//         borderRadius: '12px',
//         boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)'
//       }}>
//         <div style={{ textAlign: 'center' }}>
//           <LoadingSpinner size="large" />
//           <p style={{
//             marginTop: '16px',
//             fontSize: '16px',
//             color: '#666'
//           }}>
//             Loading products...
//           </p>
//         </div>
//       </div>
//     )
//   }

//   if (error) {
//     return (
//       <div style={{
//         background: 'white',
//         borderRadius: '12px',
//         padding: '40px',
//         textAlign: 'center',
//         boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
//         border: '1px solid #fee'
//       }}>
//         <div style={{ fontSize: '48px', marginBottom: '16px' }}>❌</div>
//         <h3 style={{
//           fontSize: '20px',
//           color: '#dc3545',
//           margin: '0 0 8px 0'
//         }}>
//           Error Loading Products
//         </h3>
//         <p style={{
//           fontSize: '16px',
//           color: '#666',
//           margin: '0'
//         }}>
//           {error}
//         </p>
//         <button
//           onClick={() => window.location.reload()}
//           style={{
//             marginTop: '16px',
//             padding: '10px 20px',
//             background: '#007bff',
//             color: 'white',
//             border: 'none',
//             borderRadius: '8px',
//             cursor: 'pointer'
//           }}
//         >
//           Try Again
//         </button>
//       </div>
//     )
//   }

//   if (!products || products.length === 0) {
//     return (
//       <div style={{
//         background: 'white',
//         borderRadius: '12px',
//         padding: '40px',
//         textAlign: 'center',
//         boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)'
//       }}>
//         <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
//         <h3 style={{
//           fontSize: '20px',
//           color: '#333',
//           margin: '0 0 8px 0'
//         }}>
//           No Products Found
//         </h3>
//         <p style={{
//           fontSize: '16px',
//           color: '#666',
//           margin: '0'
//         }}>
//           Try adjusting your search or filter criteria.
//         </p>
//       </div>
//     )
//   }

//   return (
//     <div>
//       {/* Results Header */}
//       <div style={{
//         background: 'white',
//         padding: '16px 20px',
//         borderRadius: '12px',
//         marginBottom: '20px',
//         boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         flexWrap: 'wrap',
//         gap: '12px'
//       }}>
//         <div>
//           <h2 style={{
//             fontSize: '20px',
//             fontWeight: '600',
//             color: '#333',
//             margin: '0 0 4px 0'
//           }}>
//             Products ({totalCount.toLocaleString()})
//           </h2>
//           <p style={{
//             fontSize: '14px',
//             color: '#666',
//             margin: '0'
//           }}>
//             Showing {((currentPage - 1) * 20) + 1}-{Math.min(currentPage * 20, totalCount)} of {totalCount} results
//           </p>
//         </div>
        
//         {totalPages > 1 && (
//           <div style={{
//             fontSize: '14px',
//             color: '#666'
//           }}>
//             Page {currentPage} of {totalPages}
//           </div>
//         )}
//       </div>

//       {/* Product Grid */}
//       <div style={{
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
//         gap: '20px',
//         marginBottom: '24px'
//       }}>
//         {products.map(product => (
//           <ProductCard
//             key={product.product_id}
//             product={product}
//             onAddToCart={onAddToCart}
//             onViewDetails={onViewDetails}
//           />
//         ))}
//       </div>

//       {/* Pagination */}
//       {totalPages > 1 && (
//         <div style={{
//           background: 'white',
//           padding: '20px',
//           borderRadius: '12px',
//           boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           gap: '8px',
//           flexWrap: 'wrap'
//         }}>
//           {/* Previous Button */}
//           <button
//             onClick={() => onPageChange(currentPage - 1)}
//             disabled={currentPage <= 1}
//             style={{
//               padding: '8px 12px',
//               background: currentPage <= 1 ? '#f8f9fa' : '#007bff',
//               color: currentPage <= 1 ? '#6c757d' : 'white',
//               border: '1px solid #dee2e6',
//               borderRadius: '6px',
//               cursor: currentPage <= 1 ? 'not-allowed' : 'pointer',
//               fontSize: '14px',
//               fontWeight: '500'
//             }}
//           >
//             ← Previous
//           </button>

//           {/* Page Numbers */}
//           {(() => {
//             const pages = []
//             const startPage = Math.max(1, currentPage - 2)
//             const endPage = Math.min(totalPages, currentPage + 2)

//             // First page
//             if (startPage > 1) {
//               pages.push(
//                 <button
//                   key={1}
//                   onClick={() => onPageChange(1)}
//                   style={{
//                     padding: '8px 12px',
//                     background: 'white',
//                     color: '#007bff',
//                     border: '1px solid #dee2e6',
//                     borderRadius: '6px',
//                     cursor: 'pointer',
//                     fontSize: '14px',
//                     fontWeight: '500'
//                   }}
//                 >
//                   1
//                 </button>
//               )
              
//               if (startPage > 2) {
//                 pages.push(
//                   <span key="ellipsis1" style={{ 
//                     padding: '8px 4px', 
//                     color: '#6c757d' 
//                   }}>
//                     ...
//                   </span>
//                 )
//               }
//             }

//             // Current range
//             for (let i = startPage; i <= endPage; i++) {
//               pages.push(
//                 <button
//                   key={i}
//                   onClick={() => onPageChange(i)}
//                   style={{
//                     padding: '8px 12px',
//                     background: i === currentPage ? '#007bff' : 'white',
//                     color: i === currentPage ? 'white' : '#007bff',
//                     border: '1px solid #dee2e6',
//                     borderRadius: '6px',
//                     cursor: 'pointer',
//                     fontSize: '14px',
//                     fontWeight: i === currentPage ? '600' : '500'
//                   }}
//                 >
//                   {i}
//                 </button>
//               )
//             }

//             // Last page
//             if (endPage < totalPages) {
//               if (endPage < totalPages - 1) {
//                 pages.push(
//                   <span key="ellipsis2" style={{ 
//                     padding: '8px 4px', 
//                     color: '#6c757d' 
//                   }}>
//                     ...
//                   </span>
//                 )
//               }
              
//               pages.push(
//                 <button
//                   key={totalPages}
//                   onClick={() => onPageChange(totalPages)}
//                   style={{
//                     padding: '8px 12px',
//                     background: 'white',
//                     color: '#007bff',
//                     border: '1px solid #dee2e6',
//                     borderRadius: '6px',
//                     cursor: 'pointer',
//                     fontSize: '14px',
//                     fontWeight: '500'
//                   }}
//                 >
//                   {totalPages}
//                 </button>
//               )
//             }

//             return pages
//           })()}

//           {/* Next Button */}
//           <button
//             onClick={() => onPageChange(currentPage + 1)}
//             disabled={currentPage >= totalPages}
//             style={{
//               padding: '8px 12px',
//               background: currentPage >= totalPages ? '#f8f9fa' : '#007bff',
//               color: currentPage >= totalPages ? '#6c757d' : 'white',
//               border: '1px solid #dee2e6',
//               borderRadius: '6px',
//               cursor: currentPage >= totalPages ? 'not-allowed' : 'pointer',
//               fontSize: '14px',
//               fontWeight: '500'
//             }}
//           >
//             Next →
//           </button>
//         </div>
//       )}
//     </div>
//   )
// }

// export default ProductGrid

// src/components/homepagecomponent/ProductGrid.jsx
import React from 'react';
import ProductImage from '../ui/ProductImage';

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
  }

  if (error) {
    return (
      <div style={{
        textAlign: 'center',
        padding: '40px',
        background: '#fff3cd',
        border: '1px solid #ffeaa7',
        borderRadius: '8px',
        color: '#856404'
      }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>⚠️</div>
        <h3 style={{ margin: '0 0 8px 0' }}>Unable to load products</h3>
        <p style={{ margin: '0', opacity: 0.8 }}>{error}</p>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div style={{
        textAlign: 'center',
        padding: '60px 20px',
        color: '#666'
      }}>
        <div style={{ fontSize: '64px', marginBottom: '16px' }}>📦</div>
        <h3 style={{ margin: '0 0 8px 0', color: '#333' }}>No products found</h3>
        <p style={{ margin: '0', opacity: 0.8 }}>Try adjusting your filters or search terms</p>
      </div>
    );
  }

  const getProductImage = (product) => {
    // Check for primary image first
    if (product.primary_image) {
      return product.primary_image;
    }
    
    // Check for images array
    if (product.images && product.images.length > 0) {
      const primaryImage = product.images.find(img => img.is_primary);
      if (primaryImage) {
        return primaryImage.image_url;
      }
      return product.images[0].image_url;
    }
    
    // Fallback to direct URL if available
    if (product.image_url) {
      return product.image_url;
    }
    
    return null;
  };

  return (
    <div>
      {/* Products Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '24px',
        padding: '20px 0'
      }}>
        {products.map((product) => {
          const imageUrl = getProductImage(product);
          
          return (
            <div
              key={product.product_id}
              style={{
                background: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                border: '1px solid #e0e0e0'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
              }}
            >
              {/* Product Image */}
              <div style={{ height: '240px', position: 'relative' }}>
                <ProductImage
                  src={imageUrl}
                  alt={product.name}
                  style={{ height: '100%' }}
                  onError={() => console.log(`Failed to load image for product: ${product.name}`)}
                />
                
                {/* Stock indicator */}
                {product.stock_quantity <= 0 && (
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: '#dc3545',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '600'
                  }}>
                    Out of Stock
                  </div>
                )}
                
                {product.stock_quantity > 0 && product.stock_quantity <= 5 && (
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: '#ffc107',
                    color: '#333',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '600'
                  }}>
                    Only {product.stock_quantity} left
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div style={{ padding: '20px' }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  margin: '0 0 8px 0',
                  color: '#333',
                  lineHeight: '1.4',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {product.name}
                </h3>

                {product.description && (
                  <p style={{
                    fontSize: '14px',
                    color: '#666',
                    margin: '0 0 12px 0',
                    lineHeight: '1.5',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {product.description}
                  </p>
                )}

                {/* Category */}
                {product.category && (
                  <div style={{
                    display: 'inline-block',
                    background: '#e3f2fd',
                    color: '#1976d2',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '500',
                    marginBottom: '12px'
                  }}>
                    {product.category.name}
                  </div>
                )}

                {/* Price */}
                <div style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  color: '#e74c3c',
                  marginBottom: '16px'
                }}>
                  ₹{parseFloat(product.price).toLocaleString('en-IN', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  })}
                </div>

                {/* Action Buttons */}
                <div style={{
                  display: 'flex',
                  gap: '8px'
                }}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onViewDetails(product);
                    }}
                    style={{
                      flex: 1,
                      padding: '12px',
                      background: 'transparent',
                      border: '2px solid #007bff',
                      color: '#007bff',
                      borderRadius: '8px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#007bff';
                      e.target.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = '#007bff';
                    }}
                  >
                    View Details
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(product);
                    }}
                    disabled={product.stock_quantity <= 0}
                    style={{
                      flex: 1,
                      padding: '12px',
                      background: product.stock_quantity <= 0 ? '#ccc' : '#28a745',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontWeight: '600',
                      cursor: product.stock_quantity <= 0 ? 'not-allowed' : 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      if (product.stock_quantity > 0) {
                        e.target.style.background = '#218838';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (product.stock_quantity > 0) {
                        e.target.style.background = '#28a745';
                      }
                    }}
                  >
                    {product.stock_quantity <= 0 ? 'Out of Stock' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          marginTop: '32px',
          padding: '20px 0'
        }}>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage <= 1}
            style={{
              padding: '10px 16px',
              background: currentPage <= 1 ? '#f8f9fa' : 'white',
              border: '1px solid #dee2e6',
              borderRadius: '8px',
              cursor: currentPage <= 1 ? 'not-allowed' : 'pointer',
              color: currentPage <= 1 ? '#6c757d' : '#007bff',
              fontWeight: '500'
            }}
          >
            Previous
          </button>

          {/* Page numbers */}
          {[...Array(Math.min(5, totalPages))].map((_, index) => {
            let pageNum;
            if (totalPages <= 5) {
              pageNum = index + 1;
            } else if (currentPage <= 3) {
              pageNum = index + 1;
            } else if (currentPage >= totalPages - 2) {
              pageNum = totalPages - 4 + index;
            } else {
              pageNum = currentPage - 2 + index;
            }

            return (
              <button
                key={pageNum}
                onClick={() => onPageChange(pageNum)}
                style={{
                  padding: '10px 14px',
                  background: pageNum === currentPage ? '#007bff' : 'white',
                  color: pageNum === currentPage ? 'white' : '#007bff',
                  border: '1px solid #dee2e6',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '500',
                  minWidth: '40px'
                }}
              >
                {pageNum}
              </button>
            );
          })}

          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage >= totalPages}
            style={{
              padding: '10px 16px',
              background: currentPage >= totalPages ? '#f8f9fa' : 'white',
              border: '1px solid #dee2e6',
              borderRadius: '8px',
              cursor: currentPage >= totalPages ? 'not-allowed' : 'pointer',
              color: currentPage >= totalPages ? '#6c757d' : '#007bff',
              fontWeight: '500'
            }}
          >
            Next
          </button>
        </div>
      )}

      {/* Results info */}
      <div style={{
        textAlign: 'center',
        color: '#666',
        fontSize: '14px',
        marginTop: '16px'
      }}>
        Showing {((currentPage - 1) * 20) + 1} to {Math.min(currentPage * 20, totalCount)} of {totalCount} products
      </div>

      <style jsx>{`
        @keyframes pulse {
          0% { opacity: 1; }
          100% { opacity: 0.5; }
        }
        
        @media (max-width: 768px) {
          .products-grid {
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)) !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductGrid;